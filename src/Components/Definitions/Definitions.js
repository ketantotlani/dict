import React from 'react'
import  './Definitions.css'

const Definitions = ({word, category,lightmode, meanings }) => {
    return (
        <div className="meanings">

            {
                meanings[0] && word && category==='en' && (
                    <audio src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio } controls style={{backgroundColor:"#fff", borderRadius:10}}>
                        Your Browser doesn't support audio files
                    </audio>
                )
            }
            {word === "" ? (<span className="subTitle">Start by typing a word in Search</span> )
            : (
                meanings.map((mean)=> (

                    mean.meanings.map((item) => (
                        item.definitions.map((def) => (
                            <div style={{backgroundColor: lightmode? "#3b5460" :"white", color:lightmode? "white":"black"}} className="singleMean">
                                <b>{def.definition}</b>
                                <hr style={{backgroundColor:"black", width:"100%"}}/>
                                {
                                    def.example && (
                                        <span>
                                            <b>Example: </b>
                                            {def.example}
                                        </span>
                                    )
                                }
                                {def.synonyms && (
                                    <span>
                                    <b>Synonyms: </b>
                                    {def.synonyms.map((s) => `${s},`)}
                                </span>
                                )}
                            </div>
                        ))
                    ))
                
                )
                )
            )}
        </div>
    )
}

export default Definitions
