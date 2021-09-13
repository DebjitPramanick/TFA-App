import React, {useState} from 'react'

const TFA = () => {

    const [number, setNumber] = useState(null)
    const [code, setCode] = useState(null)

    const sendCode = () => {

    }

    return (
        <div className="container">
            <div className="box">
                <h2 style={{textAlign: 'center', marginBottom: '20px'}}>2 FA</h2>
                <h3>Enter Mobile No.</h3>
                <div className="flex">
                    <input type="text" value={number}
                    onChange={(e) => setNumber(e.target.value)} />
                    <button className="send" onClick={sendCode}>Send OTP</button>
                </div>

                <h3 className="second">Enter OTP</h3>
                <div className="flex">
                    <input type="text" value={code}
                    onChange={(e) => setCode(e.target.value)}/>
                    <button className="send">Verify</button>
                </div>
            </div>
        </div>
    )
}

export default TFA
