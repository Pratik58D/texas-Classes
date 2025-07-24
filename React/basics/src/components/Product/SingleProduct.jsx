
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function SingleProduct() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setProject(data)
      
  });
  }, [id]);

  return (
    <div>
      <h2>Project ID: {id}</h2>
      {project ? (
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <img src={project.images[0]} alt="" />
        </div>
      ) : (
        <p>Loading project...</p>
      )}
    </div>
  );
}


export default SingleProduct;