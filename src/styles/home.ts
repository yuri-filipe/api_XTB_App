import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  home: {
    flex: 20,
    alignItems: 'center',
    alignContent:'center',
    justifyContent:"flex-start",
    margin:0,
    padding:0,
    backgroundColor: '#0e0e0e',
    
   
  },
  header:{
    width:"100%",
    height:"18%",
    position:"absolute",
    display:'flex',
    alignItems: 'center',
    alignContent:'center',
    justifyContent:"space-around",
    top:0,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    backgroundColor: "#152126"
    
  },
  list:{
    display:'flex',
    flexDirection:"row",
    width:"100%",
    height:20,
    alignItems: 'flex-start',
    alignContent:'flex-start',
    justifyContent:"flex-start",

    
  },
  text:{
    color: '#fff',
    fontSize:42
  }
});
