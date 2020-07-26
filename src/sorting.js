import React, {Component} from 'react';
import selectionSort from './SortingAlgorithms/selectionSort';
import './sorting.css';

const SIZE_OF_ARRAY = 50;
const TIME_DELAY = 100;

class SortingAlgo extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          array: [],
        };
    }

    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    resetArray() {
        const array = [];
        for(let i=0; i<SIZE_OF_ARRAY; i++)
        {
            array.push(this.randomInt(100, 500));
        }
        this.setState({array});
    }

    sort() {
        const {array} = this.state;
        const animations = selectionSort(array);

        const arrayBar = document.getElementsByClassName('array-bar');

        for(let i=0; i<animations.length; i++)
        {
            let currentIndex = animations[i][0];
            let minIndex = animations[i][1];

            let currentElement = arrayBar[currentIndex];
            let minElement = arrayBar[minIndex];

            if(i%2 == 0) {
                setTimeout(() => {
                    currentElement.style.backgroundColor = 'red';
                    minElement.style.backgroundColor = 'red';
                }, i * TIME_DELAY);
            }
            else {
                setTimeout(() => {
                    let tempheight = currentElement.style.height;
                    currentElement.style.height = minElement.style.height;
                    minElement.style.height = `${tempheight}`;

                    currentElement.style.backgroundColor = 'blue';
                    minElement.style.backgroundColor = 'blue';
                }, i * TIME_DELAY);
            }
        }
    }

    render() {

        const {array} = this.state;

        return (
            <div className="page-container">
                <h1>Sorting Algorithms</h1>
                <div className="btn-group">
                    <button className="generate-array-btn" onClick={() => this.resetArray()}>Generate New Array</button>
                    <button className="generate-array-btn" onClick={() => this.sort()}>Selection Sort</button>
                </div>
                <div className="array-container">
                    {array.map((value, idx) => (
                        <div
                            className="array-bar"
                            key={idx}
                            style={{
                            backgroundColor: 'blue',
                            height: `${value}px`,
                        }}></div>
                    ))}
                </div>
            </div>
        );
    }
}

export default SortingAlgo;