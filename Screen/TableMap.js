<<<<<<< HEAD
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
=======
import { View, Text , StyleSheet , TouchableOpacity, ImageBackground,Image} from 'react-native'
>>>>>>> ac33390 (เพิ่มหน้าต่างฝั่งครัว)
import { colors } from '../src/style/theme'
import { getAllTable, insertTable } from '../database/db.js'
import { useSQLiteContext } from 'expo-sqlite'
import { useEffect, useState } from 'react'

import { useNavigation } from '@react-navigation/native'

<<<<<<< HEAD
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
=======

function TableMap({changepage}) {
    return (
        <ImageBackground source={require('../photo/TableMap.jpg')} style={style.content}>
          
            <TouchableOpacity style={{marginLeft:10}} onPress={()=>{changepage('Login')}}>
                <Image source={require('../photo/back.png')} style={style.back}></Image>
            </TouchableOpacity>
            <View style={style.top}>
            
                <View style={{boxShadow: '0 0 10px rgba(0,0,0,0.5)',paddingLeft:20,paddingRight:20,borderRadius:50}}>
                <Text style={style.title}>Table</Text>
                </View>
            </View>
          
            <View style={{alignItems:'center'}}>
            <View style={style.statustable}>
                <Text style={{fontSize: 15}}>จำนวนโต๊ะที่ว่าง : 13  <View style={{backgroundColor:colors.red,width:15,height:15}}></View></Text>
                <Text style={{fontSize: 15}}>จำนวนโต๊ะที่ไม่ว่าง : 2  <View style={{backgroundColor:colors.dim,width:15,height:15}}></View></Text>
            </View>
            </View>

        <View>  
            <View style={style.middle}>
                <TouchableOpacity style={style.tablenull}>
                    <Text style={style.numtable}>1</Text></TouchableOpacity>
                <TouchableOpacity style={style.tablenull}><Text style={style.numtable}>2</Text></TouchableOpacity>
                <TouchableOpacity style={style.table}><Text style={style.numtable}>3</Text></TouchableOpacity>

            </View>

            <View style={style.middle}>
                <TouchableOpacity style={style.table}><Text style={style.numtable}>4</Text></TouchableOpacity>
                <TouchableOpacity style={style.table}><Text style={style.numtable}>5</Text></TouchableOpacity>
                <TouchableOpacity style={style.table}><Text style={style.numtable}>6</Text></TouchableOpacity>

            </View>

            <View style={style.middle}>
                <TouchableOpacity style={style.table}><Text style={style.numtable}>7</Text></TouchableOpacity>
                <TouchableOpacity style={style.table}><Text style={style.numtable}>8</Text></TouchableOpacity>
                <TouchableOpacity style={style.table}><Text style={style.numtable}>9</Text></TouchableOpacity>

            </View>


            <View style={style.middle}>
                <TouchableOpacity style={style.table}><Text style={style.numtable}>10</Text></TouchableOpacity>
                <TouchableOpacity style={style.table}><Text style={style.numtable}>11</Text></TouchableOpacity>
                <TouchableOpacity style={style.table}><Text style={style.numtable}>12</Text></TouchableOpacity>

            </View>


            <View style={style.middle}>
                <TouchableOpacity style={style.table}><Text style={style.numtable}>13</Text></TouchableOpacity>
                <TouchableOpacity style={style.table}><Text style={style.numtable}>14</Text></TouchableOpacity>
                <TouchableOpacity style={style.table}><Text style={style.numtable}>15</Text></TouchableOpacity>

            </View>
        </View> 

        <View style={style.bottombar}>
            <TouchableOpacity style={style.page} onPress={()=>{changepage('TableMap')}}><Text style={style.titlepage}>Table</Text></TouchableOpacity>
            <TouchableOpacity style={style.page}><Text style={style.titlepage}onPress={()=>{changepage('Order')}}>Order</Text></TouchableOpacity>
            <TouchableOpacity style={style.page}  onPress={()=>{changepage('Menu')}}><Text style={style.titlepage}>Menu</Text></TouchableOpacity>
            <TouchableOpacity style={style.page} onPress={()=>{changepage('Account')}}><Text style={style.titlepage}>Account</Text></TouchableOpacity>
        </View>

            
            
        </ImageBackground>
>>>>>>> ac33390 (เพิ่มหน้าต่างฝั่งครัว)
    )
}

const style = StyleSheet.create({
<<<<<<< HEAD

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
=======
    top:{
        
        alignItems:'center',
        marginBottom:'10',
        flexDirection:'row',
        justifyContent:'center'
        
    },
    content:{
        flex:1,
        paddingTop:20,
       
        
    },
    table:{
        
        width:50,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.red,
        borderColor:colors.red,
        borderWidth:2
    },
    tablenull:{
       
        width:50,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.dim,
        borderColor:colors.red,
        borderWidth:2
>>>>>>> ac33390 (เพิ่มหน้าต่างฝั่งครัว)
    },

    table_unavailable: {
        width: 65,
        height: 60,
        backgroundColor: colors.dim,
        alignItems: 'center',
        justifyContent: 'center',
    },
<<<<<<< HEAD

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
=======
    middle:{
        
        justifyContent:'space-around',
        flexDirection:'row',
        paddingLeft:20,
        paddingRight:20,
        marginBottom:30,
    },
    statustable:{
        width:250,
        marginBottom:20,
        boxShadow: '0 0 5px rgba(0,0,0,0.5)',
        backgroundColor:colors.text,
        borderRadius:10,
        padding:5,        
        
    },
    title:{
    fontSize: 50,
    fontWeight:'bold',
    color:colors.red,

    
    },
    bottombar:{
        
        flexDirection:'row',
        justifyContent:'space-around',
         position:'absolute',
         bottom:0        
    },
    page:{
        borderColor:colors.text,
        borderTopWidth:2,
        borderWidth:1,
        flex:4,
        height:70,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.red,
    
       
    },
    titlepage:{
        color:colors.text,
        fontSize:20,
        fontWeight:'bold',
        
    },
    back:{
        width:50,
        height:50,
        borderRadius:25,
        position:'absolute'
    }

    

>>>>>>> ac33390 (เพิ่มหน้าต่างฝั่งครัว)
})

export default TableMap