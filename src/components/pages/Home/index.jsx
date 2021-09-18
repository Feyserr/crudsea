import React, {useState, useEffect} from 'react';
import { Rectangle, SecondRectangle,  Stepcard, RectangleSetor, Title, SubTitle, SubTitle2} from '../../../style';
import {AddButton, InputText, InputText2, SaveButton} from './style';
import {connect} from 'react-redux';
import axios from 'axios';




 function Home({modules, dispatch}){
    const [name, setName] = useState('');
    const [cargo, setCargo] = useState();
    const [setor, setSetor] = useState([]);
    const [loading, setLoading] = useState(true);
    
    async function getSetor(){
        setLoading(true)
        try{
        const result = await axios.get("https://61414884357db50017b3da54.mockapi.io/setor");
        
        dispatch({
            type: "GET_SETOR",
            payload: result.data
        });
        } catch(error){
            console.log(error)
        } finally{
            setLoading(false)
        }
    }
    
    
    useEffect(()=>{
        getSetor();
    },[]);

    useEffect(()=>{
        console.log(modules);
    },[modules]);
    
    return(
    <div>
             
    <Rectangle>
        {modules.map(module => {
            console.log(module);
        })}
        <div>
            <SubTitle>NOME: </SubTitle>
          <InputText value={name} type="text" name="name" onChange={(e)=>{
        setName(e.target.value);
        }}/>
            <SubTitle2>CARGO(S): </SubTitle2>
        <InputText2 value={cargo} type="text" name="cargo" onChange={(e)=>{
        setCargo(e.target.value);
        }}/>  
        </div>
        
        <Title>Adicionar Setor</Title>
        <AddButton type="submit">ADICIONAR</AddButton>
        <SaveButton type="submit">SALVAR</SaveButton>
        
    </Rectangle>

    <SecondRectangle/>
    <Stepcard/>
    
    
    </div>
    

);
    


}

export default connect(state =>({modules: state.modules}))(Home);