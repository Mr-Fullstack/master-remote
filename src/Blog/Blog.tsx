import ButtonTouchable from '../components/ButtonTouchable/ButtonTouchable';
import { Typography } from '../components/Typography/Typography';
import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useTheme } from 'styled-components/native';

type PostType = {
  userId:number;
  id: number;
  title:string,
  body: string;
}

export const Blog = () => {
  const [ post, setPost] = React.useState<PostType[]>([]);
  const theme = useTheme();

  React.useEffect(()=>{

    if(post.length<1)
    {
      fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
      .then(json => setPost(json))
    }

  },[post]);

  if(post.length<1)
  {
    return (
      <View>
        <Text>Carregando...</Text>
      </View>
    )
  }
  return (
    <FlatList
      numColumns={2}
      data={post}
      maxToRenderPerBatch={10}
      initialNumToRender={10}
      renderItem={({item})=>(
        <View style={{width:"47%",padding:24,borderRadius:12, margin:16, backgroundColor:theme.colors.background,borderWidth:1, borderColor:"#ccc"}}>
          <Typography model="heading" size='x3' color={theme.colors.text}>{item.title}</Typography>
          <Typography model="body" size='x1'>{item.body}</Typography>
          <ButtonTouchable>
            <Typography model="heading" size='x2' color={theme.colors.primary}>Ler Mais </Typography>
          </ButtonTouchable>
        </View>
      )}
    />

  )
}