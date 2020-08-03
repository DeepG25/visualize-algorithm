import React, {Component} from 'react';
import selectionSort from './SortingAlgorithms/selectionSort';
import bubbleSort from './SortingAlgorithms/bubbleSort';
import insertionSort from './SortingAlgorithms/insertionSort';
import mergeSort from './SortingAlgorithms/mergeSort';
import './sorting.css';

const SIZE_OF_ARRAY = 100;
const TIME_DELAY = 1000/SIZE_OF_ARRAY;
const PRIMARY_COLOR = '#6D83F2';
const SECONDARY_COLOR = 'red';

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

    updateUI(animations) {
        const arrayBar = document.getElementsByClassName('array-bar');

        for(let i=0; i<animations.length; i++)
        {
            let currentIndex = animations[i][0];
            let minIndex = animations[i][1];

            let currentElement = arrayBar[currentIndex];
            let minElement = arrayBar[minIndex];

            if(i%2 === 0) {
                setTimeout(() => {
                    currentElement.style.backgroundColor = SECONDARY_COLOR;
                    minElement.style.backgroundColor = SECONDARY_COLOR;
                }, i * TIME_DELAY);
            }
            else {
                setTimeout(() => {
                    let tempheight = currentElement.style.height;
                    currentElement.style.height = minElement.style.height;
                    minElement.style.height = `${tempheight}`;

                    currentElement.style.backgroundColor = PRIMARY_COLOR;
                    minElement.style.backgroundColor = PRIMARY_COLOR;
                }, i * TIME_DELAY);
            }
        }
    }

    selectionSort() {
        const {array} = this.state;
        const animations = selectionSort(array);

        this.updateUI(animations);
    }

    bubbleSort() {
        const {array} = this.state;
        const animations = bubbleSort(array);

        this.updateUI(animations);
    }

    insertionSort() {
        const {array} = this.state;
        const animations = insertionSort(array);

        this.updateUI(animations);
    }

    mergeSort() {
        const {array} = this.state;
        const animations = mergeSort(array);

        console.log(animations);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                }, i * TIME_DELAY);
            } else {
                setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
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
                    <button className="generate-array-btn" onClick={() => this.selectionSort()}>Selection Sort</button>
                    <button className="generate-array-btn" onClick={() => this.bubbleSort()}>Bubble Sort</button>
                    <button className="generate-array-btn" onClick={() => this.insertionSort()}>Insertion Sort</button>
                    <button className="generate-array-btn" onClick={() => this.mergeSort()}>Merge Sort</button>
                </div>
                <div className="array-container">
                    {array.map((value, idx) => (
                        <div
                            className="array-bar"
                            key={idx}
                            style={{
                            backgroundColor: PRIMARY_COLOR,
                            height: `${value}px`,
                        }}></div>
                    ))}
                </div>
                <h4 className="owner">Created by Deep Godhani</h4>
            </div>
        );
    }
}

export default SortingAlgo;