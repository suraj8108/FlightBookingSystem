import React from "react";
import { Page, Text, View, Document, StyleSheet,Svg,Image } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import Barcode from "react-barcode";
import logo from "./logo.png"
import {useBarcode} from "@createnextapp/react-barcode"

const BoardingPass = () => {

    const styles = StyleSheet.create({
        document: {
            width: 800
        },
        page: {
            flexDirection: 'row',
            backgroundColor: "white"
        },
        section: {
            width: "100%",
            height: 200,
            margin: 10,
            flexGrow: 1,
            border: "1px solid #3A0210",
            borderRadius: "10px",
            flexDirection: "column",
            backgroundImage:{logo}
        },
        section1: {
            backgroundColor: "#3A0210",
            height: 30,
            padding: 3,
            borderTop: "1px solid #3A0210",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            color: "white",
            textAlign: "center",
            fontWeight: "2px"
        },
        section2: {
            width: "100%",
            height: 170,
            borderRight: "2px dotted black",
            paddingTop: 10
        },
        section6: {
            width: "30%"
        },
        section3: {
            width: "100%",
            textAlign: "center",
            paddingTop: 10,
            flexDirection: "row"
        },
        section4: {
            width: "100%",
            textAlign: "left",
            paddingTop: 10,
            paddingLeft: 20,
        },
        section5: {
            width: "100%",
            textAlign: "left",
            paddingTop: 10,
            paddingLeft: 20,
            borderLeft: "2px dotted black",
            fontSize: "10px",
            flexDirection:"row"
        },
    });

    const MyDocument = () => (
        <Document style={styles.document}>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <View style={styles.section1}>
                        <Text >
                            Boarding Pass
                        </Text>
                    </View>
                    <View style={styles.section20}>
                        <View style={styles.section2}>
                            <View style={styles.section3}>
                                <View style={styles.section4}>
                                    <Text>
                                        Vijay/Anand
                                    </Text>
                                    <Text style={{ paddingTop: 20 }}>
                                        From:Kochi
                                    </Text>
                                    <Text style={{ paddingTop: 20 }}>
                                        Dep. Time: 1150
                                    </Text>
                                </View>
                                <View style={styles.section4}>
                                    <Text>
                                        Flight No: BF1134
                                    </Text>
                                    <Text style={{ paddingTop: 20 }}>
                                        To:Delhi
                                    </Text>
                                    <Text style={{ paddingTop: 20 }}>
                                        Boarding: 1105
                                    </Text>
                                    <Text></Text>
                                </View>
                                <View style={styles.section5}>
                                    <View style={styles.section4}>
                                        <Text>
                                            Vijay/Anand
                                        </Text>
                                        <Text style={{ paddingTop: 20 }}>
                                            From:Kochi
                                        </Text>
                                        <Text style={{ paddingTop: 20 }}>
                                            Dep. Time: 1150
                                        </Text>
                                    </View>
                                    <View style={styles.section4}>
                                    <Text>
                                        Flight No: BF1134
                                    </Text>
                                    <Text style={{ paddingTop: 20 }}>
                                        To:Delhi
                                    </Text>
                                    <Text style={{ paddingTop: 20 }}>
                                        Boarding: 1105
                                    </Text>
                                    <Text>
                                    <Barcode value="Cake"/>
                                    </Text>
                                    
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    
                </View>
            </Page>
        </Document>
    );

    return (
        <PDFViewer className="w-100" style={{ height: "100vh" }}>
            <MyDocument />
        </PDFViewer>
    )
}

export default BoardingPass