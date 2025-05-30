import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CustomDatePicker from './CustomDatePicker';
import { getAllLanguages , getAllTheatre } from '../../services/servics.js'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeLang, changeTheatre } from '../../store/selectedValueSlice.js';


function Selects({list}) { 
    const {selectedLang , selectedTheatres} = useSelector(store => store.selector)
    const dispatch = useDispatch()
    const handler = () => {
        dispatch(changeLang(""))
        dispatch(changeTheatre(''))
    }
    const setLangValue = (e) => dispatch(changeLang(e))
    const setTheatresValue = (e) => dispatch(changeTheatre(e))

    const [languages , setLanguages] = useState([])
    const [theatres , setTheatres] = useState([])
    
    useEffect(() => {
        const fetchedLanguage = async() => {
            const lang = await getAllLanguages()
            setLanguages(Array.from(lang))
        }
        fetchedLanguage()
    },[])
    useEffect(() => {
        const fetchedTheatre = async () => {
            const theatres = await getAllTheatre()
            setTheatres(theatres)
        }
        fetchedTheatre()
    },[])

  return (
    <>
    <div className={`w-full grid grid-cols-1 ${list == "table" ? "md:grid-cols-2" : "md:grid-cols-3"}  gap-3 p-5`}>
        <div className='w-full'>
            <FormControl className='w-full ' variant="standard" sx={{ m : 1, minWidth: 100 , textAlign : 'center' }}>
            <InputLabel id="demo-simple-select-standard-label" className='italic w-full'
                sx={{textAlign:'center',
                    color: 'white',
                    '&.Mui-focused': {
                        color: 'white',
                    },}}>
            Dil</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={selectedLang}
                    onChange={(e) => setLangValue(e.target.value)}
                    label="Dil"
                     sx={{ 
                        color: 'white',
                        '&:before': { borderColor: 'white' },
                        '&:after': { borderColor: 'red' }, 
                        '&:hover:before': { borderColor: 'white' },
                        '.MuiSelect-icon': {
                            color: 'white', 
                        },
                    }}     
                                   
                >
                    {languages?.map((item,index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}                    
                </Select>
        </FormControl>
        </div>

        <div className='w-full'>
            <FormControl className='w-full ' variant="standard" sx={{ m :1 , minWidth: 100 , textAlign : 'center' }}>
            <InputLabel id="demo-simple-select-standard-label" className='italic w-full'
                sx={{textAlign:'center',
                    color: 'white',
                    '&.Mui-focused': {
                        color: 'white',
                    },}}>
            Kinoteart</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={selectedTheatres}
                    onChange={(e) => setTheatresValue(e.target.value)}
                    label="Dil"
                     sx={{ 
                        color: 'white',
                        '&:before': { borderColor: 'white' },
                        '&:after': { borderColor: 'red' }, 
                        '&:hover:before': { borderColor: 'white' },
                        '.MuiSelect-icon': {
                            color: 'white', 
                        },
                    }}                    
                > 
                    {theatres?.map(item => <MenuItem value={item}>{item}</MenuItem>)}
                </Select>
        </FormControl>
        </div>
        <div className='w-full'>
            {list == "table" ? "" : <CustomDatePicker /> }
        </div>
    
    </div>
    {
        selectedLang || selectedTheatres ? <button onClick={handler} className='text-[#BF4244] border-1 rounded-[4px] border-[#BF4244] cursor-pointer w-full md:w-[100px] duration-300 p-0 h-max py-3 hover:text-white hover:bg-[#BF4244]'>Təmizlə</button>
        : ""
    }
    </>
  )
}

export default Selects