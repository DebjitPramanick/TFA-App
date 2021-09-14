import React, { useState } from 'react'
import axios from 'axios'

const TFA = () => {

    const [number, setNumber] = useState(null)
    const [code, setCode] = useState(null)
    const [OTP, setOTP] = useState(null)
    const [sent, setSent] = useState(false)


    const sendCode = async () => {
        if (number) {
            const otp = Math.floor(1000 + Math.random() * 9000)
            setOTP(otp)
            let res = await axios.post("https://ufu84qb1rb.execute-api.us-east-2.amazonaws.com/prod",
                {
                    message: `Your OTP is: ${otp}`,
                    number: number,
                    subject: "Registration"
                })

            if (res.status === 200) {
                setSent(true)
            }
            else {
                alert("Error occurred!")
            }
        }
        else {
            alert("Please enter phone number.")
        }
    }

    const verify = () => {
        let cd = Number(code)
        console.log(cd, OTP)
        if (cd === OTP) {
            alert("Verified.")
            window.location.reload()
        }
        else {
            alert("Code is wrong.")
        }
    }

    // +919330348081

    return (
        <div className="container">
            <div className="box">
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>2 FA</h2>
                <h3>Enter Mobile No.</h3>
                <div className="flex">
                    <input type="text" value={number}
                        onChange={(e) => setNumber(e.target.value)} />
                    {!sent ? (
                        <button className="send" onClick={sendCode}>Send OTP</button>
                    ): <button className="send" onClick={sendCode}>Resend OTP</button>}
                    
                </div>

                {sent && (
                    <>
                        <h3 className="second">Enter OTP</h3>
                        <div className="flex">
                            <input type="text" value={code}
                                onChange={(e) => setCode(e.target.value)} />
                            <button disabled={!code ? true : false} className="send" onClick={() => verify()}>Verify</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default TFA
