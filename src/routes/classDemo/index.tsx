import React from 'react';

type ClassDemoP = {};

interface ClassDemoS {}

class ClassDemo extends React.Component<ClassDemoP, ClassDemoS> {
  constructor(props: ClassDemoP) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
       classDemo
      </div>
    );
  }
}

export default ClassDemo;
