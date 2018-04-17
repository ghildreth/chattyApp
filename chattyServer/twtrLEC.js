Wireframe
Sketch
HTML

# create =

constructor()
  initial state
  default props
render()
  dom ready for this.component
componentDidMount()

# Update


# Unmounting

 componentWillUncomponet -> websocket




 Do not modify state directly:

WRONG this.state.post = [];
CORRECT this.setState({posts: [ ]});


constructor(props) {
  super(props);

  this.state = {
  content: '',
  error:''
  };
}

onError(message) {
  this.setState({
  error: message
  });
}
