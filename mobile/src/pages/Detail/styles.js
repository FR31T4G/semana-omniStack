import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';
export default StyleSheet.create({
    content:{
        flex:1,
        paddingHorizontal:24,
        paddingTop: Constants.statusBarHeight+20,
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom:30,

    },
    incident:{
        marginTop:18,
        backgroundColor:"#FFF",
        padding:24,
        borderRadius: 8,
        marginBottom: 16,
    },
    incidentProperty:{
        fontSize:14,
        color:'#41414d',
        fontWeight:'bold',
        
    },
    incidentValue:{
        marginTop:5,
        fontSize:15,
        marginBottom:24,
        color:'#737380',
    },
    contactBox:{
        backgroundColor:"#FFF",
        padding:24,
        borderRadius:10,
        marginBottom:30,
    },
    actions:{
        marginTop:16,
        flexDirection:'row',
        justifyContent:'space-between',
        

    },
    action:{
        backgroundColor:"#E02041",
        height:50,
        width:'48%',
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
    },
    actionText:{
        color:'#FFF',
        fontSize:15,
        fontWeight:'bold',
    },
    heroTitle:{
        fontWeight:'bold',
        fontSize:20,
        color:"#13131a",
        lineHeight:30,
    },
    heroDescription:{
        fontSize:15,
        color:"#737380",
        marginTop:16,
    }


});