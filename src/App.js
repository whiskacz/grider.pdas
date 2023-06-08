import 'bulma/css/bulma.css'
import { ProfileCard } from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png"

function App () {
    return (
        
    <div>
        <section className="hero is-primary">
            <div className="hero-body">
                <p className="title">
                Personal Digital Assistants
                </p>
            </div>
        </section>
        
        <div className="container">
            <section className="section">
                <div className="columns">
                    <div className="column is-4">
                        <ProfileCard 
                        title="Alexa" 
                        handle="@alexa99" 
                        age={35} 
                        image={AlexaImage}
                        description="something about Alexa"
                        />
                    </div>
                    <div className="column is-4">
                        <ProfileCard 
                        title="Cortana" 
                        handle="@cortana32" 
                        age={22} 
                        image={CortanaImage}
                        description="something about Cortana"
                        />    
                    </div>
                    <div className="column is-4">
                    <ProfileCard 
                    title="Siri" 
                    handle="@siri01" 
                    age={25} 
                    image={SiriImage}
                    description="something about Siri"
                    />   
                    </div>
                </div>
            </section>
        </div>
        
        
        
    </div>
)}

export default App