import React from 'react';
import { Fragment } from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';
import Table from "@david.kucsai/react-pdf-table";


const FlightTickets = () => {
    // Create styles
    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            backgroundColor: 'white',
        },
        section: {
            border: "2px solid black",
            width: "100%",
            margin: "10px",
            padding: "20px",
        },
        flightDetails: {
            width: "100%",
            margin: "3px",
            marginTop: "1px",
            border: "2px solid #3A0210;",
            textAlign: "center",
            paddingTop: 10,
            paddingBottom: 10,
            fontSize: "30px",
            color: "#3A0210",
        },
        flightTime: {
            marginTop: "2px",
            fontSize: 15
        },
        logo: {
            height: 60,
            width: 40
        },
        passengerDetails: {
            marginTop: 10,
            width: "100%",
            margin: "3px",
            textAlign: "left",
            fontSize: 15,
            paddingTop: 10,
            paddingBottom: 10,
            color: "#3A0210"
        },
        table: {
            display: "table",
            width: "auto",
            borderStyle: "solid",
            borderWidth: 1,
            borderRightWidth: 0,
            borderBottomWidth: 0
        },
        tableRow: {
            margin: "auto",
            flexDirection: "row"
        },
        tableCol: {
            width: "25%",
            borderStyle: "solid",
            borderWidth: 1,
            borderLeftWidth: 0,
            borderTopWidth: 0
        },
        tableCol2: {
            width: "50%",
            borderStyle: "solid",
            borderWidth: 1,
            borderLeftWidth: 0,
            borderTopWidth: 0
        },
        tableCell: {
            margin: "auto",
            marginTop: 5,
            fontSize: 15
        },
        prohibited:{
            paddingTop:30
        },
        message:{
            color:"#3A0210",
            paddingTop:40,
            fontSize:40,
            textAlign:"center"
        }


    });

    // Create Document Component
    const MyDocument = () => (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <View style={styles.logo}>
                        <Image src="/assets/images/logo.png"></Image>
                    </View>
                    <View style={styles.flightDetails}>
                        <Text>Kochi to Delhi</Text>
                        <Text style={styles.flightTime}>
                            Date:23rd January 2023
                        </Text>
                        <Text style={styles.flightTime}>
                            Departure - 11:50
                        </Text>
                        <Text style={styles.flightTime}>
                            Arrival - 13:05
                        </Text>
                    </View>
                    <View style={styles.passengerDetails}>
                        <View style={styles.table}>
                            <View style={styles.tableRow}>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>First Name</Text>
                                </View>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>Last Name</Text>
                                </View>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>Phone number</Text>
                                </View>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>Email Address</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>Anand</Text>
                                </View>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>Vijay</Text>
                                </View>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>8593988691</Text>
                                </View>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>anandson47@gmail.com</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={styles.table}>
                            <View style={styles.tableRow}>
                                <View style={styles.tableCol2}>
                                    <Text style={styles.tableCell}>Fare</Text>
                                </View>
                                <View style={styles.tableCol2}>
                                    <Text style={styles.tableCell}>Amount (in Rs)</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={styles.tableCol2}>
                                    <Text style={styles.tableCell}>Ticket Fare</Text>
                                </View>
                                <View style={styles.tableCol2}>
                                    <Text style={styles.tableCell}>11,000</Text>
                                </View>
                            </View>\
                            <View style={styles.tableRow}>
                                <View style={styles.tableCol2}>
                                    <Text style={styles.tableCell}>GST</Text>
                                </View>
                                <View style={styles.tableCol2}>
                                    <Text style={styles.tableCell}>2400</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={styles.tableCol2}>
                                    <Text style={styles.tableCell}>Total Amount</Text>
                                </View>
                                <View style={styles.tableCol2}>
                                    <Text style={styles.tableCell}>13400</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.prohibited}>
                        <Image   src="/assets/images/prohibited.png"/>
                    </View>
                    <View style={styles.message}>
                        <Text> Enjoy Your Journey With Brownfield</Text>
                    </View>

                </View>

            </Page>
        </Document>
    );

    return (
        <PDFViewer className='w-100' style={{ height: "100vh" }}>
            <MyDocument />
        </PDFViewer>
    )
}
export default FlightTickets