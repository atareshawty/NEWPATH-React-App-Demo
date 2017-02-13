import React, { PropTypes } from 'react';
// Libraries are great, to avoid a lot of styling ourselves, we're using a material ui which will do it for us
import { Card, CardHeader, CardMedia, CardTitle } from 'material-ui/Card';

// Through webpack plugins, we can load an image straight into our component so we don't have to worry about image location
import avatar from '../../public/avatar.jpg';

/*
  Here we have what's called a functional stateless component
  All this component does is take props and returns something based on those props
  The syntax you see ({ children }) is called object destructuring
  The function is expecting an argument called `props` and for that agrument to be an object with a key named `children`
  This is especially useful for arrow functions with expression bodies
  Without destructuring, this function would look like
  const JokeGenerator = (props) => {
    const children = props.children;

    return (
      <Card...
    );
  }
}
*/
const JokeGenerator = ({ children }) => (
  <Card
    style={{
      marginTop: '20px',
      width: '800px'
    }}
  >
    <CardHeader
      title="NEWPATH Talk 2/13/2017"
      avatar={avatar}
    />
    <CardTitle
      title="Chuck Norris Joke Generator"
    />
    <CardMedia>
      {children}
    </CardMedia>
  </Card>
);

/*
  Defining proptypes is like declaring an 'api' for our component.
  Proptypes state what props the component expects to receive from it's parent and what type each prop is
  Here, JokeGenerator is expecting children, which is a React element
*/
JokeGenerator.propTypes = {
  children: PropTypes.element.isRequired
};

export default JokeGenerator;
