import React,{useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet } from 'react-native';
import ChatStyle from '../style/Chat.style';
import BasicText from '../component/BasicText';
import BasicButton from '../component/BasicButton';

const Chat = ({navigation}: any) => {
    const [selectedButton, setSelectedButton] = useState('chat_start');
    const [isStart, setIsStart] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const chat = {
        chat_header:"chat_header",
        chat_start:"chat_start",
        chat_ing:"chat_ing",
        chat_end:"chat_end",
        chat_person1:"chat_person1",
        chat_person2:"chat_person2",
        chat_person3:"chat_person3",
        chat_person4:"chat_person4",
        chat_person5:"chat_person5",
        chat_chat1:"chat_chat1",
        chat_chat2:"chat_chat2",
        chat_chat3:"chat_chat3",
        chat_chat4:"chat_chat4",
        chat_chat5:"chat_chat5",
        chat_startBtn:"chat_startBtn",
        chat_noEndChat:"chat_noEndChat",
        chat_startChatNow:"chat_startChatNow",
        chat_startNow:"chat_startNow"
    }
    const handleNext=()=>{
        navigation.navigate("Chatting");
    }
    const handleStartChat=()=>{

    }
    
    return (
        <SafeAreaView style={ChatStyle.MainContainer}>

        <View style={ChatStyle.header}>
            <BasicText stringKey={chat.chat_header} style={ChatStyle.headerText}/>
        </View>


        <View style={ChatStyle.bar}>
            <BasicButton
                text={chat.chat_start}
                textSize={12}
                textWeight={'700'}
                onPress={handleStartChat}
                enabledColor= {selectedButton ===chat.chat_start? 'none/#71727A/' :'#FFFFFF/#71727A/'}
                
            />
            <Text style={ChatStyle.divide}>|</Text>
            <BasicButton
   
                text={chat.chat_ing}
                textSize={12}
                textWeight={'700'}
                onPress={handleStartChat}
                enabledColor='none/#71727A/'
                
            />
            <Text style={ChatStyle.divide}>|</Text>
            <BasicButton
   
                text={chat.chat_end}
                textSize={12}
                textWeight={'700'}
                onPress={handleStartChat}
                enabledColor='none/#71727A/'
                
            />
        </View>

        {isStart && (
             <View style={ChatStyle.main}>
             <BasicText stringKey={chat.chat_noEndChat} style={ChatStyle.mainText}/>
             <BasicText stringKey={chat.chat_startChatNow} style={ChatStyle.startChatNow}/>
             <BasicButton
                 style={ChatStyle.startChat}
                 text={chat.chat_startBtn}
                 textSize={12}
                 textWeight={'700'}
                 onPress={handleNext}
                 enabledColor='#006FFD/#FFFFFF/'
                 
             />
         </View>
        )}

        {/**완료한 대화 */}
        {isEnd &&(

         <View style={ChatStyle.main}>
         <BasicText stringKey={chat.chat_noEndChat} style={ChatStyle.mainText}/>
         <BasicText stringKey={chat.chat_startChatNow} style={ChatStyle.startChatNow}/>
         <BasicButton
             style={ChatStyle.startChat}
             text={chat.chat_startNow}
             textSize={12}
             textWeight={'700'}
            //  onPress={}
             enabledColor='#006FFD/#FFFFFF/'
                
         />
        </View>
        )}
       

    </SafeAreaView>
    );
};



export default Chat;
