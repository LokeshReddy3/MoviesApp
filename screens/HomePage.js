// import {useState,React,useEffect} from 'react';
// import {Text, View} from 'react-native';
// import { getPopularMovies } from '../API/services';
// import { SliderBox } from 'react-native-image-slider-box';

// const HomePage = () => {
//     const [movie,setMovie] = useState('');
//   const [error,setError] = useState(false);
//   useEffect(() => {
//     getPopularMovies().then(movies => {
//       setMovie(movies[0]);
//     }).catch(err =>{
//       setError(err);

//     });
//   },[]);
//     return (
//         <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}>
//       <Text>Movie Name:{movie.original_title}</Text>
//       <Text>Language:{movie.original_language}</Text>
//       <Text>Release:{movie.release_date}</Text>
//       {error && <Text style={{color : 'red'}}>Error in the Server</Text>}
//     </View>
        
//     );
// }

// export default HomePage;



import {useState,React,useEffect} from 'react';
import {Text, View, Dimensions} from 'react-native';
import { getPopularMovies , getUpcomingMovies} from '../API/services';
import { SliderBox } from 'react-native-image-slider-box';

const dimensions = Dimensions.get('screen');
const HomePage = () => {
    const [moviesImages,setMoviesImages] = useState('');
  const [error,setError] = useState(false);
  useEffect(() => {
    getPopularMovies().then(movies => {
    }).catch(err =>{
      setError(error);

    });
    getUpcomingMovies().then(movies => {
        const moviesImagesArray = [];
        movies.forEach(movie => {
            (moviesImagesArray.push('https://image.tmdb.org/t/p/w500'+movie.poster_path))
        });
        setMoviesImages(moviesImagesArray);
      }).catch(err =>{
        setError(error );
  
      });
  },[]);
    return (
        <View
      style={styles.sliderContainer}>
        <SliderBox images={moviesImages}  dotStyle={styles.sliderstyle} sliderBoxHeight={dimensions.height / 1.5} autoplay ={true} circleLoop={true}/>
     
    </View>
        
    );
}


const styles = StyleSheet.create({
    sliderContainer : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sliderstyle:{
        height: 0
    },
});

export default HomePage;