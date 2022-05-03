import React,{useState} from 'react';
import axios from 'axios'
import Recommendation from './Recommendation';

const allSymptoms=['itching', 'skin_rash', 'nodal_skin_eruptions', 'continuous_sneezing', 'shivering', 'chills', 'joint_pain', 'stomach_pain', 'acidity', 'ulcers_on_tongue', 'muscle_wasting', 'vomiting', 'burning_micturition', 'spotting_ urination', 'fatigue', 'weight_gain', 'anxiety', 'cold_hands_and_feets', 'mood_swings', 'weight_loss', 'restlessness', 'lethargy', 'patches_in_throat', 'irregular_sugar_level', 'cough', 'high_fever', 'sunken_eyes', 'breathlessness', 'sweating', 'dehydration', 'indigestion', 'headache', 'yellowish_skin', 'dark_urine', 'nausea', 'loss_of_appetite', 'pain_behind_the_eyes', 'back_pain', 'constipation', 'abdominal_pain', 'diarrhoea', 'mild_fever', 'yellow_urine', 'yellowing_of_eyes', 'acute_liver_failure', 'fluid_overload', 'swelling_of_stomach', 'swelled_lymph_nodes', 'malaise', 'blurred_and_distorted_vision', 'phlegm', 'throat_irritation', 'redness_of_eyes', 'sinus_pressure', 'runny_nose', 'congestion', 'chest_pain', 'weakness_in_limbs', 'fast_heart_rate', 'pain_during_bowel_movements', 'pain_in_anal_region', 'bloody_stool', 'irritation_in_anus', 'neck_pain', 'dizziness', 'cramps', 'bruising', 'obesity', 'swollen_legs', 'swollen_blood_vessels', 'puffy_face_and_eyes', 'enlarged_thyroid', 'brittle_nails', 'swollen_extremeties', 'excessive_hunger', 'extra_marital_contacts', 'drying_and_tingling_lips', 'slurred_speech', 'knee_pain', 'hip_joint_pain', 'muscle_weakness', 'stiff_neck', 'swelling_joints', 'movement_stiffness', 'spinning_movements', 'loss_of_balance', 'unsteadiness', 'weakness_of_one_body_side', 'loss_of_smell', 'bladder_discomfort', 'foul_smell_of urine', 'continuous_feel_of_urine', 'passage_of_gases', 'internal_itching', 'toxic_look_(typhos)', 'depression', 'irritability', 'muscle_pain', 'altered_sensorium', 'red_spots_over_body', 'belly_pain', 'abnormal_menstruation', 'dischromic _patches', 'watering_from_eyes', 'increased_appetite', 'polyuria', 'family_history', 'mucoid_sputum', 'rusty_sputum', 'lack_of_concentration', 'visual_disturbances', 'receiving_blood_transfusion', 'receiving_unsterile_injections', 'coma', 'stomach_bleeding', 'distention_of_abdomen', 'history_of_alcohol_consumption', 'fluid_overload.1', 'blood_in_sputum', 'prominent_veins_on_calf', 'palpitations', 'painful_walking', 'pus_filled_pimples', 'blackheads', 'scurring', 'skin_peeling', 'silver_like_dusting', 'small_dents_in_nails', 'inflammatory_nails', 'blister', 'red_sore_around_nose', 'yellow_crust_ooze', 'prognosis']

function humanize(str) {
    var i, frags = str.split('_');
    for (i=0; i<frags.length; i++) {
      frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
    }
    return frags.join(' ');
  }

function Symptoms() {
    const [search,setSearch]=useState("");
    const [disease,setDisease]=useState("");
    const [symptoms,setSymptoms]=useState([]);
    
    let add=(idx)=>{
        console.log(idx);
        let newArray=[...symptoms,idx];
        setSymptoms([...newArray]);
    }
    
    let remove=(idx)=>{
        let newArray = symptoms.filter((ele)=> ele !== idx);
        setSymptoms([...newArray]);
    }
    let handleSubmit=()=>{
        var myParam={
            data:symptoms
        }
        axios.post('http://127.0.0.1:5000/predict',myParam)
        .then(function(res){
            setDisease(res.data.prediction)
            console.log(res.data.prediction)
        })
        .catch(function(error){
            console.log(error)
        });
    }
    let filtered=[...allSymptoms]
    filtered=filtered.filter((name)=>name.toLowerCase().includes(search.toLocaleLowerCase()));

  return (
    <div className=''>
      <div className='w-full h-[15vh]'></div>
        <div className='flex w-full '>
        <div className='w-3/4 h-[80vh] overflow-y-scroll p-2' >
        <div className='flex justify-center space-x-8 m-auto'> 
            <input type='text' placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)} className='w-1/2 border-[#79B4B7] text-[#090a0f] rounded-md border-2 p-2 m-2'/>
            <button onClick={()=>handleSubmit()} className='h-[40px] w-[100px] m-2 rounded-xl bg-gradient-to-r from-[#85586F] to-[#AC7D88] text-white px-2'>Predict</button>
        </div>
        <div className='flex flex-wrap text-center w-full justify-evenly '>
        {      
            filtered.map((s,idx)=>{
                return <div className='cursor-pointer'>
                {
                    symptoms.find((ele)=>ele===idx)?
                    <div onClick={()=>remove(idx)} className='border-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 border-sky-500 p-1 m-1'><p>{humanize(s)}</p></div>:
                    <div onClick={()=>add(idx)} className='border-2 rounded-xl border-sky-500 p-1 m-1'><p>{humanize(s)}</p></div>
                }
                </div>
            })
        }
        </div>
      </div>
      <div className='w-1/4'>
        <Recommendation disease={disease} />
      </div>
      </div>
    </div>
  )
}

export default Symptoms