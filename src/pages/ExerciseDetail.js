import React, {useState, useEffect  } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {fetchData, exerciseOptions,youtubeOptions} from '../utils/fetchData'
import ExerciseVideos from '../components/ExerciseVideos'
import Detail from '../components/Detail'
import SimilarExercises from '../components/SimilarExercises'


const ExerciseDetail = () => {
const [exerciseDetailData,setExerciseDetail]=useState({})
const [exerciseVideos,setExerciseVideos]=useState([])
const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
const [equipmentExercises, setEquipmentExercises] = useState([]);
const {id}=useParams()

useEffect(()=>{
const fetchExerciseData=async()=>{
  const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
  const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

  const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
  const exerciseVideoDetail = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
  const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
  const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
  
  setExerciseDetail(exerciseDetailData);
  console.log(exerciseDetailData)
  setExerciseVideos(exerciseVideoDetail.contents)
  console.log(exerciseVideoDetail)
  setTargetMuscleExercises(targetMuscleExercisesData);
  setEquipmentExercises(equimentExercisesData);

}
fetchExerciseData()
},[id])

  return (
    <Box>
      <Detail exerciseDetailData={exerciseDetailData}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetailData.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
    </Box>
  )
}

export default ExerciseDetail