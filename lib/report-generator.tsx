import React from "react";
import {
	Document,
	Page,
	Text,
	View,
	StyleSheet,
	renderToBuffer,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
	page: { padding: 40, fontSize: 12 },
	header: { fontSize: 20, marginBottom: 20, fontWeight: "bold" },
	section: { marginBottom: 15 },
	label: { fontWeight: "bold", marginBottom: 5 },
	value: { marginLeft: 10 },
	resultClear: { color: "#2e7d32", fontSize: 16, fontWeight: "bold" },
	resultMatch: { color: "#c62828", fontSize: 16, fontWeight: "bold" },
});

interface Match {
	name: string;
	source: string;
	score: number;
	matchType?: string;
}

interface ReportData {
	clientName: string;
	timestamp: Date;
	result: string;
	matches: Match[];
	lists: string[];
}

const PDFReport = ({ data }: { data: ReportData }) => (
	<Document>
		<Page size="A4" style={styles.page}>
			<View style={styles.header}>
				<Text>Sanctions Screening Report</Text>
			</View>

			<View style={styles.section}>
				<Text style={styles.label}>Client Name:</Text>
				<Text style={styles.value}>{data.clientName}</Text>
			</View>

			<View style={styles.section}>
				<Text style={styles.label}>Screening Date:</Text>
				<Text style={styles.value}>{data.timestamp.toISOString()}</Text>
			</View>

			<View style={styles.section}>
				<Text style={styles.label}>Result:</Text>
				<Text
					style={[
						styles.value,
						data.result === "CLEAR" ? styles.resultClear : styles.resultMatch,
					]}>
					{data.result}
				</Text>
			</View>

			<View style={styles.section}>
				<Text style={styles.label}>Lists Checked:</Text>
				<Text style={styles.value}>{data.lists.join(", ")}</Text>
			</View>

			{data.matches.length > 0 && (
				<View style={styles.section}>
					<Text style={styles.label}>Matches Found:</Text>
					{data.matches.map((m, i) => (
						<Text key={i} style={styles.value}>
							{m.name} ({m.source}) - Score: {(m.score * 100).toFixed(1)}%
						</Text>
					))}
				</View>
			)}
		</Page>
	</Document>
);

export async function generatePDF(data: ReportData): Promise<Buffer> {
	return await renderToBuffer(<PDFReport data={data} />);
}
