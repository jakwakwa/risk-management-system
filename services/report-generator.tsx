import {
	Document,
	Page,
	Text,
	View,
	StyleSheet,
	renderToBuffer,
} from "@react-pdf/renderer";
import React from "react";

// Register fonts if needed (skipping for simplicity)

const styles = StyleSheet.create({
	page: {
		flexDirection: "column",
		backgroundColor: "#ffffff",
		padding: 30,
	},
	section: {
		margin: 10,
		padding: 10,
		flexGrow: 1,
	},
	header: {
		fontSize: 24,
		marginBottom: 20,
		textAlign: "center",
	},
	text: {
		fontSize: 12,
		marginBottom: 5,
	},
	status: {
		fontSize: 18,
		marginTop: 10,
		fontWeight: "bold",
	},
});

interface ReportData {
	clientName: string;
	date: Date;
	result: "CLEAR" | "MATCH";
	matches: any[];
}

const ReportDocument = ({ data }: { data: ReportData }) => (
	<Document>
		<Page size="A4" style={styles.page}>
			<View style={styles.section}>
				<Text style={styles.header}>Risk Screening Report</Text>
				<Text style={styles.text}>Client Name: {data.clientName}</Text>
				<Text style={styles.text}>Date: {data.date.toISOString()}</Text>
				<Text style={styles.status}>Result: {data.result}</Text>

				{data.matches.length > 0 && (
					<View>
						<Text style={{ marginTop: 20, fontSize: 14 }}>Potential Matches:</Text>
						{data.matches.map((m, i) => (
							<Text key={i} style={styles.text}>
								- {JSON.stringify(m)}
							</Text>
						))}
					</View>
				)}

				<Text style={{ marginTop: 50, fontSize: 10, color: "grey" }}>
					This document is immutable and serves as negative assurance for compliance
					purposes.
				</Text>
			</View>
		</Page>
	</Document>
);

export async function generateScreeningReport(data: ReportData): Promise<Buffer> {
	// @ts-ignore - React-PDF types can be tricky
	return await renderToBuffer(<ReportDocument data={data} />);
}
