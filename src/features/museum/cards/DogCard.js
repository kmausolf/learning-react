// We need to import React's useState hook to manage state in our functional component
import { useState } from "react";

/*
 * Welcome to the DogCard, a reusable component!  In this card, we'll present the info
 * we have on each dog in our museum.  Info on each dog will come into this component
 * as props.  The reason we want this to be its own component is because we want each
 * dog card to have its own state!  Visitors to our lovely museum should be able to
 * click a favorite icon on the card to indicate that they really like this dog.  Since
 * this preference isn't being saved anywhere, it'll be lost upon refresh, but you can
 * use LocalStorage if you would like to save it as an extra challenge *wink wink*.
 * 
 * Included with this project is a basic design of what the card should look like. 
 * Feel free to make it your own and style it how you like!
 */

const DogCard = (props) => {

    /*
     * This is what is called a 'hook'.  It's a function that gives us two things,
     * the state value and a function to set the state value (setter).  In this case,
     * isFavorite is the state value, and setIsFavorite is the setter.  The order
     * is important here, as it will place the state value in the first position,
     * and the setter in the second.  We've initialized it with the boolean value
     * of 'false' here, because we don't want each dog to be a favorite immediately
     * (even though they should, because they're perfect).
     * 
     * Any time state or props change, your component updates, then calls any
     * applicable useEffect functions.
     */
    const [isFavorite, setIsFavorite] = useState(false);

    /* ------------------------ CHALLENGE BEGIN -------------------------------- */
    
    /*
     * Create a state value and setter pair of your own here.  We want to give these
     * lovely dogs a treat for being so good, but we have to keep track of how many
     * treats each dog has eaten, lest they reach an unhealthy weight. We'll show
     * this value on the card later on.
     */

    /* ------------------------ CHALLENGE END ---------------------------------- */

    return (
        <div>
            <div>
                {// this block is safe to remove
                    /* 
                     * Here, we're using the prop that Museum gave to us. What's
                     * with the question mark and the OR bars? The question mark means
                     * "if dog doesn't exist or isn't an object, don't try to read its
                     * properties, and instead just default to null". The OR (the ||)
                     * is there just in case we didn't get a dog prop, and will default
                     * to "No Name Found" rather than showing nothing.
                     * 
                     */
                }
                {props.dog?.dogName || "No Name Found"}
            </div>
            <div>
                {// this block is safe to remove
                    /* ----------------- CHALLENGE BEGIN ------------------------ */

                    /* 
                     * Add the image of the dog here, using an <img> tag. Just like
                     * we did above, use the dogPhoto prop as the image source (src).
                     * Try to keep all the images the same size without modifying the
                     * image file!
                     *
                     */

                    /* ------------------ CHALLENGE END ------------------------- */
                }
            </div>
            <div>
                <div>
                    bone button
                </div>
                <div>
                    <p>Eaten</p>
                    {// this block is safe to remove
                        /* 
                        * Replace the 0 with the state value you created earlier. Hint:
                        * put the value between a pair of curly braces like this comment here!
                        * 
                        */
                    }
                    <p>0</p>
                    <p>bones!</p>
                </div>
                <div>
                    favorite button
                </div>
            </div>
        </div>
    )

}