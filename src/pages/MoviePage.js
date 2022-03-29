import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function MoviePage() {
  const params = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [params.id]);

  return <div>MOVIE PAGE: {data && data.title}</div>;
}
