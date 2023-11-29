import './App.css'
import { useEffect, useState } from 'react'

function App () {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')

  const [userinfo, setUserinfo] = useState({
    code: 0,
    id: 0,
    from: '--',
    name: '--',
    token: '--'
  })

  useEffect(() => {
    if (window?.MAXIMA) {
      console.log(JSON.stringify(window.MAXIMA))

      setTimeout(() => {
        window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'MAXIMA_token', url: window.location.origin }))
      }, 1000)

      Object.defineProperty(window, 'MAXIMA_BACK', {
        configurable:true,
        set: function (value) {
          if (value.status === 'ok') {
            console.log('Back value')
            console.log(value)
            login({
              token: value.token
            }).then(e => {
              console.log('userinfo')
              console.log(e)
              setUserinfo(e)
            }).catch(err => {
              console.log(err.msg)
            })
          } else {
            // reject
          }
        }
      })
    }
  }, [])

  const loginClick = () => {
    login({
      account,
      password
    }).then(e => {
      console.log(e)
      setUserinfo(e)
    }).catch(err => {
      console.log(err.msg)
    })
  }

  const login = (params) => {
    return new Promise((resolve, reject) => {
      if (params.token) {
        resolve({
          code: 0,
          id: 1,
          from: 'MAXIMA APP',
          name: 'maxima',
          token: `maxima-${params.token}-token`
        })
        return
      }

      if (params.account && params.password) {
        resolve({
          code: 0,
          id: 2,
          from: 'Login Page',
          name: 'maxima-2',
          token: `maxima-${params.account}-token`
        })
        return
      }

      reject({
        code: 1,
        msg: 'Login failed'
      })
    })
  }
  return (
    <div>
      {
        !userinfo.id
          ? <div className="App">
            <br/>
            <br/>
            <br/>
            LOGIN PAGE
            <br/>
            <br/>
            <br/>
            <input type="text" placeholder="account" value={account} onChange={v => setAccount(v.target.value)}/>
            <br/>
            <br/>
            <input type="password" placeholder="password" value={password} onChange={v => setPassword(v.target.value)}/>
            <br/>
            <br/>
            <button onClick={() => loginClick()}>login</button>
          </div>
          : <div className="App">
            <br/>
            <br/>
            <br/>
            HOME
            <br/>
            <br/>
            <br/>
            <span>UID: {userinfo.id}</span>
            <br/>
            <br/>
            <br/>
            <span>Username: {userinfo.name}</span>
            <br/>
            <br/>
            <br/>
            <span>From: {userinfo.from}</span>
            <br/>
            <br/>
            <br/>
            <span>Token: {userinfo.token}</span>
          </div>
      }
    </div>
  )
}

export default App
