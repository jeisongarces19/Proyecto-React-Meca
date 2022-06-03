import React,{useState} from 'react';

import '../App.css';
import '../Styles/editarExposicion.css';

import ReactPlayer from 'react-player';

import swal from 'sweetalert';

import {Paginacion} from '../Components/Paginacion';
import styles from '../styles.module.scss';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

//const id_ser3 = parseInt(cookies.get('idUser'));
//const id_expo = parseInt(cookies.get('idexpo'));
//console.log("id_ usuario:",id_ser3)
//console.log("id_ exposicion:",id_ser3)
const id_ser3=1;
const id_expo=2;

function PaginasExposiciones (props) {
  const [pagina, setPagina] = useState (1);
  const [porPagina] = useState (3);


  const Expo=props.informacionpath;

  const maximo = Expo.length / porPagina;


  return (
    <div className={styles.container}>
      <div className={styles.containerPoke}>
      {Expo.slice (
        (pagina - 1) * porPagina,
        (pagina - 1) * porPagina + porPagina
      ).map ((Expo, i) => (

        <div key={i} className={styles.pokeContainer}>                     
          
          <div className={styles.imgContainer}>
            <img src={Expo.path} alt="No cargo la imagen" />
          </div>
          <p >{Expo.id}</p> 
          
        </div>
      ))}
      </div>

      <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo} />
    </div>
  );
}

function Videos(props) {
    const [pagina, setPagina] = useState (1);
    const [porPagina] = useState (1);


    const videosinfo2=props.informacionvideo;

    const maximo = videosinfo2.length / porPagina;


    return (
        <div className={styles.container}>
            <div >
                {videosinfo2.slice (
                (pagina - 1) * porPagina,
                (pagina - 1) * porPagina + porPagina
                ).map ((videosinfo2, i) => (

                <div key={i} className={styles.pokeContainer}>

                    <div className="contenedor"> 
                        
                        <h5>{videosinfo2.id}</h5>
                        <ReactPlayer 
                            url={videosinfo2.path}
                            controls
                            width='100%'
                            height='100%'
                            className="react-player"
                        />
                    </div>
     


                  
                </div>
                ))}
            </div>

            <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo} />
        </div>
    );
}

function AudioFondo(props) {

  const audio=props.informacionaudio;

  return (
    <div className="contenedor">




        <ReactPlayer 
              url={audio.audio} 
              controls
              width= '9%'
              height= "4%"
              backgroundcolor= 'rgba(0, 0, 0, 0.5)'
              className="audiomio"
              playing 

        />

    </div>
  );
}

function Subtitles(props){
    const subtitles2=props.informacionsub;
   
    return (
    <div>        
        {subtitles2.map ((subtitles2, i) => (
        <div key={i}>  
            <p >id:{subtitles2.id}</p>
            <h1 className="EditarExposicionletra">{subtitles2.text}</h1> 
        </div>
        ))}        
    </div>
    );
}

function Comentarios(props){
    const comentario=props.informacioncom;
   
    return (
    <div>        
        {comentario.map ((comentario, i) => (
        <div key={i}>  
            <p>id:{comentario.id}</p>
            <h1>{comentario.text}</h1> 
        </div>
        ))}        
    </div>
    );
}


function PROTOTIPO1(props){

    const Informacion=props.informacion;

    return (
    <div className="">

        <div className="">
            <h1 className="EditarExposicionletra"> {Informacion.title.toUpperCase()} </h1>                
        </div>

        <br></br>

        <div className="">
            {Informacion.text2.length===0 ?(
                <h2>Cargando subtilos...</h2>
                ):( 
                    <Subtitles informacionsub={Informacion.text2}></Subtitles>                                                                       
                )
            }
        </div>

        <div className="">
            <h2>Descripcion</h2>
            <p className=""> {Informacion.description} </p>                
        </div> 

        <br></br>

        <div className="">
            <h2>Bibliografia</h2>
            <p className=""> {Informacion.bibliography} </p>                
        </div> 

        <br></br>

        {/*
        <div className="">

            {Informacion.video2.length===0 ?(
                <h2>Cargando videos...</h2>
                ):( 
                    <Videos informacionvideo={Informacion.video2}></Videos>                                                   
                    
                )
            }
        </div>
        */}

        <div className="">
            {Informacion.path2.length===0 ?(
                <h2>Cargando imagenes...</h2>
                ):( 
                    <PaginasExposiciones informacionpath={Informacion.path2}></PaginasExposiciones>                                                    
                    
                )
            }
        </div>

        {/*<div className="">

            {Informacion.audio.length===0 ?(
                <h2>Cargando audio...</h2>
                ):( 
                    <AudioFondo informacionaudio={Informacion.audio}></AudioFondo>                                                   
                    
                )
            }
        </div>*/}

        <br></br>
        <br></br>

        <div className="">
            {Informacion.comment2.length===0 ?(
                <h2>Cargando comentarios...</h2>
                ):( 
                    <Comentarios informacioncom={Informacion.comment2}></Comentarios>                                                    
                    
                )
            }
        </div>
    
    </div>
    );
}


function PROTOTIPO2(props){

    const Informacion=props.informacion;

    return (
    <div className="">

        <div className="">
            <h1 className="EditarExposicionletra"> {Informacion.title.toUpperCase()} </h1>                
        </div>

        <br></br>

        <div className="">
            {Informacion.text2.length===0 ?(
                <h2>Cargando subtilos...</h2>
                ):( 
                    <Subtitles informacionsub={Informacion.text2}></Subtitles>                                                    
                    
                )
            }
        </div>

        <br></br>

        {/*<div className="">

            {Informacion.video2.length===0 ?(
                <h2>Cargando videos...</h2>
                ):( 
                    <Videos informacionvideo={Informacion.video2}></Videos>                                                   
                    
                )
            }
        </div>*/}

        <div className="">
            <h2>Descripcion</h2>
            <p className=""> {Informacion.description} </p>                
        </div> 

        <br></br>

        <div className="">
            {Informacion.path2.length===0 ?(
                <h2>Cargando imagenes...</h2>
                ):( 
                    <PaginasExposiciones informacionpath={Informacion.path2}></PaginasExposiciones>                                                    
                    
                )
            }
        </div>

        <div className="">
            <h2>Bibliografia</h2>
            <p className=""> {Informacion.bibliography} </p>                
        </div> 

        <br></br>

        <div className="">
            {Informacion.audio.length===0 ?(
                <h2>Cargando audio...</h2>
                ):( 
                    <AudioFondo informacionaudio={Informacion.audio}></AudioFondo>                                                   
                    
                )
            }
        </div>

        <br></br>
        <br></br>

        <div className="">
            {Informacion.comment2.length===0 ?(
                <h2>Cargando comentarios...</h2>
                ):( 
                    <Comentarios informacioncom={Informacion.comment2}></Comentarios>                                                                       
                )
            }
        </div>

    </div>
    );
}

function ProtoFail(props){
    return (
    <div className="">
        <h1>No existe tal prototipo</h1>
    </div>
    );
}


class EditarExposicionesVirtuales extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {      
                "user_id": id_ser3,  
                "id": id_expo,
                "title":"",
                "description":"", 
                "background" : "",   
                "bibliography":"",
                "structure" : "1",
                "audio": "",    
                "picture" : "",
            },            
            datasub:{
                "user_id": id_ser3,  
                "virtual_exposition_id": id_expo,
                "type_id": 1,
                "text":"",
            },            
            datavid:{
                "user_id": id_ser3,  
                "virtual_exposition_id": id_expo,
                "type_id": 2,
                "path":'', 
            },
            datapho:{
                "user_id": id_ser3,  
                "virtual_exposition_id": id_expo,
                "type_id":3,
                "path":"", 
                "text":"",                        
            },
            comentario: {
                "user_id": id_ser3,  
                "id": id_expo,
                "comment":"Quitar comentario id:",
            },
            exposicion: {
                "title":"",
                "description":"", 
                "background" : "",   
                "bibliography":"",
                "structure" : "",
                "audio": "", 
                "video2":[], 
                "text2":[],
                "path2":[],                         
                "comment2":[],
            },
        };
        
        //this.manejarEnvioDeFormulario = this.manejarEnvioDeFormulario.bind(this);
        
        this.Creardata= this.Creardata.bind(this);
        this.CrearSubtitle= this.CrearSubtitle.bind(this);
        this.CrearVideo= this.CrearVideo.bind(this);
        this.CrearPhoto= this.CrearPhoto.bind(this);

        this.EliminarVideo= this.EliminarVideo.bind(this);
        this.EliminarSubtitle= this.EliminarSubtitle.bind(this);
        this.EliminarPhoto= this.EliminarPhoto.bind(this);
        this.EliminarComment= this.EliminarComment.bind(this);
        
        this.manejarCambiodata = this.manejarCambiodata.bind(this);
        this.manejarCambiodatasub = this.manejarCambiodatasub.bind(this);
        this.manejarCambiodatavid = this.manejarCambiodatavid.bind(this);
        this.manejarCambiodatapho = this.manejarCambiodatapho.bind(this);
        this.manejarCambiocomment = this.manejarCambiocomment.bind(this);

        this.componentDidMount= this.componentDidMount.bind(this);


    }

    cerrarSesion=()=>{
        cookies.remove('idexpo', {path: "/"});
        window.location.href='./AdministrarExposiciones';
    }

    async componentDidMount() {
        /* Apartado para los datos*/
        var respuestatodo = await fetch(`https://proyecto-meca-cali.herokuapp.com/VirtualExpositions/Search/id/`+id_expo, 
        {
            method: "GET",    
        });
        var Exposition;
        var statusr=respuestatodo.status;  
        if (statusr===200) {
            Exposition= await respuestatodo.json(); 
            //console.log("la informacion de la exposicion", Exposition)

            var Audio=Exposition.audio;
            var Background=Exposition.background;
            var Bibliography=Exposition.bibliography;
            var Description=Exposition.description;
            var Picture=Exposition.picture;
            var Structure=Exposition.structure;
            var Title=Exposition.title;       
            
            if (Audio===null) {
              Audio="";
            }
            if (Background===null) {
              Background="";
            }
            if (Bibliography===null) {
              Bibliography="";
            }
            if (Description===null) {
              Description="";
            }        
            if (Picture===null) {
              Picture="";
            }
            if (Structure===null) {
              Structure="";
            }
            if (Title===null) {
              Title="";
            }
            
            this.setState({
                
                data: {
                    user_id: this.state.data.user_id,  
                    id: this.state.data.id,
                    title:Title,
                    description:Description, 
                    background:Background,   
                    bibliography:Bibliography,
                    structure:Structure,
                    audio: Audio,    
                    picture: Picture,                            
                },                
                /*exposicion: {  
                    title:Title,
                    description:Description, 
                    background:Background,   
                    bibliography:Bibliography,
                    structure:Structure,
                    audio:Audio, 
                    video2:this.state.exposicion.video2, 
                    text2:this.state.exposicion.text2,
                    path2:this.state.exposicion.path2,                         
                    comment2:this.state.exposicion.comment2,
                }*/

            });            
        }


        /* Apartado para los subtitlos*/
        var respuesta1 = await fetch(`https://proyecto-meca-cali.herokuapp.com/Multimedia/`+id_expo+`/Subtitle`, 
        {
            method: "GET",    
        });
        var ExpositionSub;
        var statussub=respuesta1.status;
        if (statussub===200) {
            ExpositionSub= await respuesta1.json(); 
            //console.log("la respuesta de los subtilos", ExpositionSub)
            
            if (ExpositionSub===null) {
              ExpositionSub=[];
            }
           
            this.setState({
                exposicion: {  
                    title:this.state.exposicion.title,
                    description:this.state.exposicion.description, 
                    background:this.state.exposicion.background,   
                    bibliography:this.state.exposicion.bibliography,
                    structure:this.state.exposicion.structure,
                    audio:this.state.exposicion.audio, 
                    video2:this.state.exposicion.video2, 
                    text2:ExpositionSub,
                    path2:this.state.exposicion.path2,                         
                    comment2:this.state.exposicion.comment2,
                }
            });
        }        


        /* Apartado para los Videos*/        
        var respuesta2 = await fetch(`https://proyecto-meca-cali.herokuapp.com/Multimedia/`+id_expo+`/Video`, 
        {
            method: "GET",    
        });            
        var ExpositionVideo;
        var statusv=respuesta2.status; 
        if (statusv===200) {
            ExpositionVideo= await respuesta2.json(); 
            //console.log("la respuesta", ExpositionVideo)
            if (ExpositionVideo===null) {
              ExpositionVideo=[];
            }
            this.setState({
                exposicion: {   
                    title:this.state.exposicion.title,
                    description:this.state.exposicion.description, 
                    background:this.state.exposicion.background,   
                    bibliography:this.state.exposicion.bibliography,
                    structure:this.state.exposicion.structure,
                    audio:this.state.exposicion.audio, 
                    video2:ExpositionVideo, 
                    text2:this.state.exposicion.text2,
                    path2:this.state.exposicion.path2,                         
                    comment2:this.state.exposicion.comment2,
                }
            });
        }

        
        /* Apartado para las Imagenes*/    
        var respuesta3 = await fetch(`https://proyecto-meca-cali.herokuapp.com/Multimedia/`+id_expo+`/Images`, 
        {
            method: "GET",    
        });             
        var ExpositionPath;
        var statusPath=respuesta3.status;  
        if (statusPath===200) {
            ExpositionPath= await respuesta3.json(); 
            //console.log("la respuesta", ExpositionPath)
            if (ExpositionPath===null) {
              ExpositionPath=[];
            }
            this.setState({
                exposicion: {      
                    title:this.state.exposicion.title,
                    description:this.state.exposicion.description, 
                    background:this.state.exposicion.background,   
                    bibliography:this.state.exposicion.bibliography,
                    structure:this.state.exposicion.structure,
                    audio:this.state.exposicion.audio, 
                    video2:this.state.exposicion.video2, 
                    text2:this.state.exposicion.text2,
                    path2:ExpositionPath,                         
                    comment2:this.state.exposicion.comment2,
                }
            });        
        }
        
        
        /* Apartado para los Comentarios*/     
        var respuesta4 = await fetch(`https://proyecto-meca-cali.herokuapp.com/Comments/VirtualExposition/`+id_expo, 
        {
            method: "GET",    
        });             
        var ExpositionCom;
        var statusCom=respuesta4.status;          
        if (statusCom===200) {
            ExpositionCom= await respuesta4.json(); 
            //console.log("la respuesta", ExpositionCom)
            if (ExpositionCom===null) {
              ExpositionCom=[];
            }         
            this.setState({
                exposicion: {      
                    title:this.state.exposicion.title,
                    description:this.state.exposicion.description, 
                    background:this.state.exposicion.background,   
                    bibliography:this.state.exposicion.bibliography,
                    structure:this.state.exposicion.structure,
                    audio:this.state.exposicion.audio, 
                    video2:this.state.exposicion.video2, 
                    text2:this.state.exposicion.text2,
                    path2:this.state.exposicion.path2,                         
                    comment2:ExpositionCom,
                }
            });                        
        }
    }


    render() {

        const respuesta_structure = this.state.data.structure;
        let PROTOTIPO;
        if (respuesta_structure==="1") {
            PROTOTIPO= <PROTOTIPO1 informacion={this.state.exposicion}></PROTOTIPO1>
        }else if (respuesta_structure==="2"){
            PROTOTIPO= <PROTOTIPO2 informacion={this.state.exposicion}></PROTOTIPO2>
        }else{
            PROTOTIPO= <ProtoFail informacion={this.state.exposicion}></ProtoFail>
        }


        return (
            <div className="">
    
            <div className="columns central">

              <div className="column"></div>

                <div className="column" >

                    <div className="cardEditarExposicion">
                    <center>
                        <h1 className="EditarExposicionletra"> EDICION Y CREACION EXPOSICION DIGITAL</h1>                
                        
                        <form className="">

                            <div>

                                <div className="form-group">
                                    🅱
                                    <input autoFocus required placeholder="Estructura" type="text" id="structure"className="FondoInput"  onChange={this.manejarCambiodata} value={this.state.data.structure}>
                                    </input>
                                </div>

                                <div className="form-group">
                                    🆎
                                    <input autoFocus required placeholder="Titulo" type="text" id="title" className="FondoInput"  onChange={this.manejarCambiodata} value={this.state.data.title} >
                                    </input> 
                                </div>

                                <div className="form-group">
                                    🆎
                                    <input autoFocus required placeholder="Fondo" type="text" id="background" className="FondoInput"  onChange={this.manejarCambiodata} value={this.state.data.background} >
                                    </input> 
                                </div>

                                <div className="form-group">  
                                    🆎<span></span>        
                                    <textarea placeholder=" Biografia " className="FondoInput" id="bibliography"  onChange={this.manejarCambiodata} value={this.state.data.bibliography}></textarea>
                                </div>

                                

                                <div className="form-group">
                                    🅱
                                    <input autoFocus required placeholder=" Audio" type="text" id="audio"className="FondoInput"  onChange={this.manejarCambiodata} value={this.state.data.audio} >
                                    </input>
                                </div>

                                <div className="form-group"> 
                                    🅱<span></span>                                                          
                                    <textarea placeholder="☕ Descripcion " className="FondoInput" id="description"  onChange={this.manejarCambiodata} value={this.state.data.description}></textarea>
                                </div>  

                                <div className="form-group">
                                    <button className="button is-primary mt-2" onClick={this.Creardata}>
                                        Actualizar Informacion
                                    </button>
                                </div> 
                                
                            </div>

                            <br></br>
                            <br></br>

                            <div className="form-group">
                                <button className="button is-primary mt-2" onClick={this.CrearSubtitle}>
                                    +
                                </button>
                                <input autoFocus required placeholder="SubTitulo" type="text" id="text" className="FondoInput"  onChange={this.manejarCambiodatasub} value={this.state.datasub.text} >
                                </input> 
                                <button className="button is-primary mt-2"  onClick={this.EliminarSubtitle}>
                                    -
                                </button>
                            </div>


                            <div className="form-group">
                                <button className="button is-primary mt-2" onClick={this.CrearVideo}>
                                    +
                                </button>
                                <input autoFocus required placeholder="Video" type="text" id="path" className="FondoInput"  onChange={this.manejarCambiodatavid} value={this.state.datavid.path} >
                                </input> 
                                <button className="button is-primary mt-2" onClick={this.EliminarVideo}>
                                    -
                                </button>
                            </div>
                           
                            <div className="form-group">
                                <button className="button is-primary mt-2" onClick={this.CrearPhoto}>
                                    +
                                </button>
                                <input autoFocus required placeholder="Fotos" type="text" id="path" className="FondoInput"  onChange={this.manejarCambiodatapho} value={this.state.datapho.path} >
                                </input> 
                                <input autoFocus required placeholder="Descripcion Imagen" type="text" id="text" className="FondoInput"  onChange={this.manejarCambiodatapho} value={this.state.datapho.text} >
                                </input> 


                                <button className="button is-primary mt-2" onClick={this.EliminarPhoto}>
                                    -
                                </button>
                            </div>

                            <div className="form-group">                                
                                <input autoFocus required placeholder="Comentario" type="text" id="comment" className="FondoInput"  onChange={this.manejarCambiocomment} value={this.state.comentario.comment} >
                                </input> 
                                <br></br>
                                <button className="button is-primary mt-2" onClick={this.EliminarComment}>
                                    -
                                </button>
                            </div>

                            <button className="button is-primary mt-2" onClick={()=>this.cerrarSesion()}>
                                Guardar Exposicion Digital
                            </button>
                              
                        </form>                      

                    </center>
                    </div>
                </div>
                
                <div className="column" >                    
                </div>

            </div>


            <div className="columns central">

              <div className="column"></div>

                <div className="column" >

                    <div className="cardEditarExposicion">
                    <center>
                        <h1 className="EditarExposicionletra"> ¡VISUALIZAR PROTOTIPO ESTRUCTURAL!</h1>                
                        
                        <br></br>
                        <br></br>

                        {PROTOTIPO}                                                

                    </center>
                    </div>
                </div>
                
                <div className="column" >
                    
                </div>

            </div>

            </div>
            
        );
    }




    /*Aqui es donde se crea o actualiza la informacion general*/
    async Creardata(evento) {

        const continuar = () =>{
            swal({
              title: "Creacion",
              text: "Tu exposicion ha sido modificada",
              icon: "success",              
            }).then(function() {
                window.location = "/EditarExposicionesVirtuales";
            });
        }
        const detener = () =>{
            swal({
              title: "Error",
              text: "Surgio un error al modificar la exposicion",
              icon: "error",
              dangerMode: true,
            })
            .then(willDelete => {
              if (willDelete) {
                swal("Volver a intentar!");
              }
            });
        }        
        evento.preventDefault();
        const cargaUtil = JSON.stringify(this.state.data);
        console.log(cargaUtil);   
        var respuesta = await fetch(`https://proyecto-meca-cali.herokuapp.com/VirtualExpositions/Update`, 
        {
            method: "PUT",            
            body: cargaUtil,   
        });

        //console.log("respuesta de todo",respuesta) 
       
        var statusr=respuesta.status;         
        
        if (statusr===202) {
           
            this.setState({
                data: {      
                    "user_id": id_ser3,  
                    "id": id_expo,
                    "title":"",
                    "description":"", 
                    "background" : "",   
                    "bibliography": "",
                    "structure" : "1",
                    "audio": "",
                    "picture":""
                }    
            
            });
            continuar(); 

        } else {        
            detener();
        } 
    }

    /*Aqui es donde se crea o actualiza la informacion de los subtitulos*/
    async CrearSubtitle(evento) {
        const continuar = () =>{
            swal({
              title: "Creacion",
              text: "Tu SubTitulo ha sido creada",
              icon: "success",              
            }).then(function() {
                window.location = "/EditarExposicionesVirtuales";
            });
        }
        const detener = () =>{
            swal({
              title: "Error",
              text: "Surgio un error al crear el SubTitulo",
              icon: "error",
              dangerMode: true,
            })
            .then(willDelete => {
              if (willDelete) {
                swal("Volver a intentar!");
              }
            });
        }        
        evento.preventDefault();
        const cargaUtil = JSON.stringify(this.state.datasub);
        //console.log(cargaUtil);   
        var respuesta = await fetch(`https://proyecto-meca-cali.herokuapp.com/Multimedia/Create`, 
        {
            method: "POST",            
            body: cargaUtil,   
        });
        //console.log("respuesta de todo",respuesta)        
        var statusr=respuesta.status;        
        if (statusr===201) {           
            this.setState({
                datasub: {
                    "user_id": id_ser3,  
                    "virtual_exposition_id": id_expo,
                    "type_id": 1,
                    "text":"",
                }
            });
            continuar(); 
        } else {        
            detener();
        }        
    }

    /*Aqui es donde se crea o actualiza la informacion de los videos*/
    async CrearVideo(evento) {
        const continuar = () =>{
            swal({
              title: "Creacion",
              text: "Tu video ha sido agregado",
              icon: "success",              
            }).then(function() {
                window.location = "/EditarExposicionesVirtuales";
            });
        }
        const detener = () =>{
            swal({
              title: "Error",
              text: "Surgio un error al agregar el video",
              icon: "error",
              dangerMode: true,
            })
            .then(willDelete => {
              if (willDelete) {
                swal("Volver a intentar!");
              }
            });
        }        
        evento.preventDefault();
        const cargaUtil = JSON.stringify(this.state.datavid);
        //console.log(cargaUtil);   
        var respuesta = await fetch(`https://proyecto-meca-cali.herokuapp.com/Multimedia/Create`, 
        {
            method: "POST",            
            body: cargaUtil,   
        });
        //console.log("respuesta de todo",respuesta)        
        var statusr=respuesta.status;         
        if (statusr===201) {           
            this.setState({
                datavid: {
                    "user_id": id_ser3,  
                    "virtual_exposition_id": id_expo,
                    "type_id": 2,
                    "path":'',             
                }
            });
            continuar();
        } else {        
            detener();
        }
    }

    /*Aqui es donde se crea o actualiza la informacion de las fotos*/
    async CrearPhoto(evento) {
        const continuar = () =>{
            swal({
              title: "Creacion",
              text: "Tu foto ha sido subida",
              icon: "success",              
            }).then(function() {
                window.location = "/EditarExposicionesVirtuales";
            });
        }
        const detener = () =>{
            swal({
              title: "Error",
              text: "Surgio un error al subir la foto",
              icon: "error",
              dangerMode: true,
            })
            .then(willDelete => {
              if (willDelete) {
                swal("Volver a intentar!");
              }
            });
        }   
        evento.preventDefault();
        const cargaUtil = JSON.stringify(this.state.datapho);
        //console.log(cargaUtil);   
        var respuesta = await fetch(`https://proyecto-meca-cali.herokuapp.com/Multimedia/Create`, 
        {
            method: "POST",            
            body: cargaUtil,   
        });
        //console.log("respuesta de todo",respuesta)        
        var statusr=respuesta.status;
        if (statusr===201) {           
            this.setState({
                datapho:{
                    "user_id": id_ser3,  
                    "virtual_exposition_id": id_expo,
                    "type_id": 3,
                    "path":"",  
                    "text":"",  
                }
            });
            continuar();
        } else {        
            detener();
        } 
    }

    /* --------------------------------------------------------------------------------------*/

    /*Aqui es donde se eliminia la informacion de los subtilos*/
    async EliminarSubtitle(evento) {
        const continuar = () =>{
            swal({
              title: "Creacion",
              text: "Tu SubTitulo ha sido eliminado",
              icon: "success",              
            }).then(function() {
                window.location = "/EditarExposicionesVirtuales";
            });
        }
        const detener = () =>{
            swal({
              title: "Error",
              text: "Surgio un error al eliminar el SubTitulo",
              icon: "error",
              dangerMode: true,
            })
            .then(willDelete => {
              if (willDelete) {
                swal("Volver a intentar!");
              }
            });
        }        
        evento.preventDefault();
        /* se envia el campo de text porque se usa para subir y eliminar"*/
        var respuesta = await fetch(`https://proyecto-meca-cali.herokuapp.com/Multimedia/Delete/`+parseInt(this.state.datasub.text), 
        {
            method: "DELETE",    
        });
        //console.log("respuesta de todo",respuesta)
        var statusr=respuesta.status;
        if(statusr===200) {           
            this.setState({
                datasub: {
                    "user_id": id_ser3,  
                    "id": id_expo,
                    "type_id": 1,
                    "text":"",
                }
            });
            continuar(); 
        } else {        
            detener();
        }
    }

    /*Aqui es donde se eliminia la informacion de los Videos*/
    async EliminarVideo(evento) {
        const continuar = () =>{
            swal({
              title: "Creacion",
              text: "Tu video se ha eliminado",
              icon: "success",              
            }).then(function() {
                window.location = "/EditarExposicionesVirtuales";
            });
        }
        const detener = () =>{
            swal({
              title: "Error",
              text: "Surgio un error al eliminar el video",
              icon: "error",
              dangerMode: true,
            })
            .then(willDelete => {
              if (willDelete) {
                swal("Volver a intentar!");
              }
            });
        }        
        evento.preventDefault();
        /* se envia el campo de path porque se usa para subir y eliminar"*/
        var respuesta = await fetch(`https://proyecto-meca-cali.herokuapp.com/Multimedia/Delete/`+parseInt(this.state.datavid.path), 
        {
            method: "DELETE",    
        });
        //console.log("respuesta de todo",respuesta)
        var statusr=respuesta.status; 
        if (statusr===200) {
            this.setState({
                datavid: {
                    "user_id": id_ser3,  
                    "id": id_expo,
                    "type_id": 2,
                    "path":'', 
                }
            });
            continuar(); 
        } else {        
            detener();
        }
    }

    /*Aqui es donde se eliminia la informacion de las Fotos*/
    async EliminarPhoto(evento) {
        const continuar = () =>{
            swal({
              title: "Creacion",
              text: "Tu foto ha sido eliminada",
              icon: "success",              
            }).then(function() {
                window.location = "/EditarExposicionesVirtuales";
            });
        }
        const detener = () =>{
            swal({
              title: "Error",
              text: "Surgio un error al eliminar la foto",
              icon: "error",
              dangerMode: true,
            })
            .then(willDelete => {
              if (willDelete) {
                swal("Volver a intentar!");
              }
            });
        }        
        evento.preventDefault();
        /* se envia el campo de path porque se usa para subir y eliminar"*/
        var respuesta = await fetch(`https://proyecto-meca-cali.herokuapp.com/Multimedia/Delete/`+parseInt(this.state.datapho.path), 
        {
            method: "DELETE",    
        });
        //console.log("respuesta de todo",respuesta)        
        var statusr=respuesta.status;         
        if (statusr===200) {           
            this.setState({
                datapho: {
                    "user_id": id_ser3,  
                    "id": id_expo,
                    "type_id": 3,
                    "path":"",
                    "text":"",                         
            
                }
            });
            continuar(); 
        } else {        
            detener();
        }
    }

    async EliminarComment(evento) {
        const continuar = () =>{
            swal({
              title: "Creacion",
              text: "Tu comentario se ha eliminado",
              icon: "success",              
            }).then(function() {
                window.location = "/EditarExposicionesVirtuales";
            });
        }
        const detener = () =>{
            swal({
              title: "Error",
              text: "Surgio un error al eliminar el comentario",
              icon: "error",
              dangerMode: true,
            })
            .then(willDelete => {
              if (willDelete) {
                swal("Volver a intentar!");
              }
            });
        }        
        evento.preventDefault();
        /*Aqui es donde se eliminia la informacion de los comentarios*/
        var respuesta = await fetch(`https://proyecto-meca-cali.herokuapp.com/Comments/Delete/`+parseInt(this.state.comentario.comment), 
        {
            method: "DELETE",    
        });
        //console.log("respuesta de todo",respuesta)        
        var statusr=respuesta.status;         
        if (statusr===200) {           
            this.setState({
                comentario: {
                    "user_id": id_ser3,  
                    "id": id_expo,
                    "comment":"",
                }
            });
            continuar(); 
        } else {        
            detener();
        }
    }

    /* --------------------------------------------------------------------------------------*/


     /* Aqui va actualizando la informacion en cada input o cuadro*/
    manejarCambiodata(evento) {
        const clave = evento.target.id;
        let valor = evento.target.value;
        this.setState(state => {
            const dataActualizado = state.data;            
            dataActualizado[clave] = valor;
            //console.log("lo que hay data:",dataActualizado)
            const dataActualizado2 = state.exposicion;            
            dataActualizado2[clave] = valor;
            //console.log("lo que hay expo:",dataActualizado2)
            return {
                data: dataActualizado,                
            }
        });
    }

    manejarCambiodatasub(evento) {   
        const clave = evento.target.id;
        let valor = evento.target.value;
        this.setState(state => {
            const dataActualizado = state.datasub;            
            dataActualizado[clave] = valor;
            return {
                datasub: dataActualizado,
            }
        });
    }

    manejarCambiodatavid(evento) {   
        const clave = evento.target.id;
        let valor = evento.target.value;
        this.setState(state => {
            const dataActualizado = state.datavid;            
            dataActualizado[clave] = valor;
            return {
                datavid: dataActualizado,
            }
        });
    }

    manejarCambiodatapho(evento) {   
        const clave = evento.target.id;
        let valor = evento.target.value;
        this.setState(state => {
            const dataActualizado = state.datapho;            
            dataActualizado[clave] = valor;
            return {
                datapho: dataActualizado,
            }
        });
    }

    manejarCambiocomment(evento) {   
        const clave = evento.target.id;
        let valor = evento.target.value;
        this.setState(state => {
            const dataActualizado = state.comentario;            
            dataActualizado[clave] = valor;
            return {
                comentario: dataActualizado,
            }
        });
    }

}
export default EditarExposicionesVirtuales;