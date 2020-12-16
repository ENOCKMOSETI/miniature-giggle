import React from 'react';

const Form = props => (
    <div className='title'>
        <h2>Chuck Norris Jokes</h2>
        <p>please select a category to get a random Chuck Norris joke</p>
        <form className='form' onSubmit={props.getJoke}>
            <select name='category'>
                <option value=''>Select Category</option>
                <option value='animal'>animal</option>
                <option value='career'>career</option>
                <option value='celebrity'>celebrity</option>
                <option value='dev'>dev</option>
                <option value='fashion'>fashion</option>
                <option value='food'>food</option>
                <option value='history'>history</option>
                <option value='money'>money</option>
                <option value='movie'>movie</option>
                <option value='music'>music</option>
                <option value='political'>political</option>
                <option value='religious'>religion</option>
                <option value='science'>science</option>
                <option value='sport'>sport</option>
                <option value='travel'>travel</option>
            </select>
            <button>Get Joke</button>
        </form>
    </div>
);

export default Form;