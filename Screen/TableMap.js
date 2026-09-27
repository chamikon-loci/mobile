import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { colors } from '../src/style/theme'
import { getAllTable, insertTable } from '../database/db.js'
import { useSQLiteContext } from 'expo-sqlite'
import { useEffect, useState } from 'react'

import { useNavigation } from '@react-navigation/native'

function TableMap() {

    const db = useSQLiteContext()

    const initTables = [
        { table_name: 'T1', status: 'available' },
        { table_name: 'T2', status: 'available' },
        { table_name: 'T3', status: 'available' },
        { table_name: 'T4', status: 'available' },
        { table_name: 'T5', status: 'available' },
        { table_name: 'T6', status: 'available' },
        { table_name: 'T7', status: 'available' },
        { table_name: 'T8', status: 'available' },
        { table_name: 'T9', status: 'available' },
        { table_name: 'T10', status: 'available' },
        { table_name: 'T11', status: 'available' },
        { table_name: 'T12', status: 'available' },
        { table_name: 'T13', status: 'available' },
        { table_name: 'T14', status: 'available' },
        { table_name: 'T15', status: 'available' },
    ]

    const [tables, setTables] = useState([])
    const [availableTable, setAvailableTable] = useState(0)
    const [unavailableTable, setUnavailable] = useState(0)

    useEffect(() => {
        const loadTable = async () => {
            await insertTable(db, initTables)

            const AllTables = await getAllTable(db)
            setTables(AllTables)

            const available = AllTables.filter(table => table.table_status === 'available').length
            const unavailable = AllTables.filter(table => table.table_status !== 'available').length

            setAvailableTable(available)
            setUnavailable(unavailable)
        }

        loadTable()
    }, [])

    const navigation = useNavigation()

    return (
        <ScrollView>
            <View style={style.content}>

                <View style={style.top}>
                    <Text style={{ fontSize: 50, fontWeight: 'bold' }}> Table </Text>
                </View>

                <View style={style.statustable}>
                    <Text style={{ fontSize: 15 }}> จำนวนโต๊ะที่ว่าง : {availableTable} </Text>
                    <Text style={{ fontSize: 15 }}> จำนวนโต๊ะที่ไม่ว่าง : {unavailableTable} </Text>
                </View>

                <View style={style.tables}>
                    {tables.map((table) => (
                        <TouchableOpacity key={table.table_id} style={table.table_status === 'available' ? style.table_btn : style.table_unavailable} >
                            <Text style={style.numtable}>
                                {table.table_name}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={style.tab}>
                    <TouchableOpacity style={style.tap_btn} onPress={() => navigation.navigate('Order For Chef')}>
                        <Text>Order</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.tap_btn} onPress={() => navigation.navigate('Bill History')}>
                        <Text>Bill History</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({

    top: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10
    },

    tables: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 25,
        justifyContent: 'center',
    },

    table_btn: {
        width: 65,
        height: 60,
        backgroundColor: colors.red,
        alignItems: 'center',
        justifyContent: 'center',
    },

    table_unavailable: {
        width: 65,
        height: 60,
        backgroundColor: colors.dim,
        alignItems: 'center',
        justifyContent: 'center',
    },

    numtable: {
        fontSize: 16
    },

    content: {
        padding: 20,
    },

    statustable: {
        marginBottom: 20
    },

    tab: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    tap_btn: {
        borderWidth: 1,
        backgroundColor: 'lightgray',
        margin: 10,
        padding: 10
    }
})

export default TableMap