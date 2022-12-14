import React,{useState} from 'react'
import {View,Text, ScrollView, SafeAreaView} from 'react-native'
import AuthHeader from '../../../components/AuthHeader'
import CheckBox from '../../../components/CheckBox'
import Input from '../../../components/input'
import Button from '../../../components/Button'
import {styles} from './styles'
import Seperator from '../../../components/Seperator'


const Signup = ({navigation}) => {
 
  const [checked,setChecked]=useState(false);

  const onSignIn=()=>{
 navigation.navigate('Signin')
  }
  const onBack=()=>{
    navigation.goBack();
    }

    
  return (
    <SafeAreaView>

    
  <ScrollView style={styles.container}>
 <AuthHeader onBackPress={onBack}  title="Sign Up"/>

 <Input label="Name" placeholder="John Doe"/>
 <Input label="E-mail" placeholder="example@gmail.com"/>
 <Input isPassword label="Password" placeholder="********"/>
 <View style={styles.agreeRole}>
       <CheckBox checked={checked} onCheck={setChecked}/>
       <Text style={styles.text}> I agree with Terms & Privacy</Text>
</View>
<Button style={styles.button} title="Sign Up" />
<Seperator text="or sign up with"/>
<Text style={styles.footerText}> Already have an account? <Text onPress={onSignIn} style={styles.footerLink}>Sign In</Text></Text>

 </ScrollView>

 </SafeAreaView>
  )
}

export default Signup
