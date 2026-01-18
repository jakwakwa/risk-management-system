"use client";

import { useState, useEffect } from "react";
import { Bell, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { toast } from "sonner";
import { formatDistanceToNow } from "date-fns";

type Notification = {
	id: string;
	title: string;
	message: string;
	type: "INFO" | "SUCCESS" | "WARNING" | "ERROR";
	link?: string;
	read: boolean;
	createdAt: string;
};

export function NotificationBell() {
	const [notifications, setNotifications] = useState<Notification[]>([]);
	const [unreadCount, setUnreadCount] = useState(0);
	const [isOpen, setIsOpen] = useState(false);

	// Poll for notifications
	useEffect(() => {
		const fetchNotifications = async () => {
			try {
				const response = await fetch("/api/notifications");
				if (response.ok) {
					const data = await response.json();
					setNotifications(data);
					setUnreadCount(data.filter((n: Notification) => !n.read).length);
				}
			} catch (error) {
				console.error("Failed to fetch notifications", error);
			}
		};

		fetchNotifications();
		const interval = setInterval(fetchNotifications, 10000); // Poll every 10s

		return () => clearInterval(interval);
	}, []);

	const markAsRead = async (id?: string) => {
		try {
			const response = await fetch("/api/notifications", {
				method: "PATCH",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(id ? { id } : { markAll: true }),
			});

			if (response.ok) {
				if (id) {
					setNotifications(prev =>
						prev.map(n => (n.id === id ? { ...n, read: true } : n))
					);
					setUnreadCount(prev => Math.max(0, prev - 1));
				} else {
					setNotifications(prev => prev.map(n => ({ ...n, read: true })));
					setUnreadCount(0);
					toast.success("All notifications marked as read");
				}
			}
		} catch (error) {
			toast.error("Failed to update notifications");
		}
	};

	return (
		<Popover open={isOpen} onOpenChange={setIsOpen}>
			<PopoverTrigger asChild>
				<Button variant="ghost" size="icon" className="relative">
					<Bell className="h-5 w-5" />
					{unreadCount > 0 && (
						<span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-600 ring-2 ring-background" />
					)}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-80 p-0" align="end">
				<div className="flex items-center justify-between border-b p-4">
					<h4 className="font-semibold text-sm">Notifications</h4>
					{unreadCount > 0 && (
						<Button
							variant="ghost"
							size="sm"
							className="text-xs h-auto p-0 text- hover:text-foreground"
							onClick={() => markAsRead()}>
							Mark all read
						</Button>
					)}
				</div>
				<ScrollArea className="h-[300px]">
					{notifications.length === 0 ? (
						<div className="p-4 text-center text-white">No notifications</div>
					) : (
						<div className="grid">
							{notifications.map(notification => (
								<div
									key={notification.id}
									className={cn(
										"flex flex-col gap-1 border-b pink-50/10 p-4 transition-colors hover:bg-muted/50 relative group",
										!notification.read && "bg-muted/20"
									)}>
									<div className="flex items-start justify-between gap-2">
										<p className="font-medium text-xs leading-none">
											{notification.title}
										</p>
										{!notification.read && (
											<Button
												variant="ghost"
												size="icon"
												className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity"
												onClick={e => {
													e.preventDefault();
													markAsRead(notification.id);
												}}>
												<Check className="h-3 w-3" />
												<span className="sr-only">Mark read</span>
											</Button>
										)}
									</div>
									<p className="text-xs text-muted-foreground line-clamp-2">
										{notification.message}
									</p>
									<div className="flex items-center justify-between mt-1">
										<span className="text-xs italic text-muted-foreground">
											{formatDistanceToNow(new Date(notification.createdAt), {
												addSuffix: true,
											})}
										</span>
										{notification.link && (
											<Link
												href={notification.link}
												onClick={() => setIsOpen(false)}
												className="text-[10px] text-primary hover:underline">
												View Details
											</Link>
										)}
									</div>
								</div>
							))}
						</div>
					)}
				</ScrollArea>
			</PopoverContent>
		</Popover>
	);
}
