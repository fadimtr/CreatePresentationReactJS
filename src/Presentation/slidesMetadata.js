export default [
  {
    title:'What is ReactJS?',
    content:'A JavaScript library for building user interfaces',
    contentType: 'text'
  },
  {
    title:'Why React?',
    content:[
      'Reusable: Helps creating reusable UI components',
      'Virtual Dom: Improving the performance by using a virtual DOM before updating the real DOM',
      'Fast: The DOM updates algorithm and the events handling make it fast',
      'Scalable: Lot of big web applications are written with ReactJS',
      'Community: Large community'
    ],
    contentType: 'list'
  },
  {
    title:"Let's take a look into the most important terms in React",
    content:[
      'JSX',
      'Component',
      'Props',
      'State',
      'Lifecycle'
    ],
    contentType: 'list'
  },
  {
    title:'JSX',
    content:"It's a JS extension which allow us right JS that looks like HTML, It's syntactic sugar for the React.createElement(component, props, ...children) function",
    additionalContent: "jsx",
    contentType: 'text&img'
  },
  {
    title:'Component',
    content:'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.',
    additionalContent: "https://jsfiddle.net/reactjs/tk1yL6g5/embed/js,html,result/dark",
    contentType: 'text&code'
  },
  {
    title:'Props',
    content:'Parameters passed to the Component from parent Components to share data between components, and they are immutable!',
    additionalContent: "https://jsfiddle.net/reactjs/tk1yL6g5/embed/js,html,result/dark",
    contentType: 'text&code'
  },
  {
    title:'State',
    content:"It's the internal Component state, which can be changed and used along the component lifecycle",
    additionalContent: "https://jsfiddle.net/fadimatar/8eu0r13y/3/embed/js,html,result/dark",
    contentType: 'text&code'
  },
  {
    title:'Lifecycle',
    content:'Each component has several “lifecycle methods” that you can override to run code at particular times in the process',
    contentType: 'text'
  },
  {
    title:'Lifecycle Parts',
    content:[
      'Mount', 'Update', 'Unmount','Link: http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/'
    ],
    contentType: 'list'
  },
  {
    title:'Separate page into small components',
    content: '',
    additionalContent: "separate-components",
    contentType: 'text&img'
  },
  {
    title:'Separate page into small components',
    content: '',
    additionalContent: "separate-components-names",
    contentType: 'text&img'
  }
]