import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

function App() {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'SET_USER',
            payload: {
                name,
                age,
                gender,
            },
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Age:
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Gender:
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="">Select gender</option>
                        <option value="male">Мужской</option>
                        <option value="female">Женский</option>
                    </select>
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
            <div>
                <h3>User Info:</h3>
                <p>Name: {user.name}</p>
                <p>Age: {user.age}</p>
                <p>Gender: {user.gender}</p>
            </div>
        </div>
    );
}

export default App;