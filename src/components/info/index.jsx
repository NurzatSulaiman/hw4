import React from "react";
import styles from './style.module.css'
import {Button, TextField} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


const DATA = [
  {
    id: 1,
    title: 'lorem any text without any meaning',
    body: 'lorem, lorem, lorem, lorem'
  },
  {
    id: 2,
    title: 'que est esse',
    body: 'lorem, lorem, lorem, lorem'
  },
  {
    id: 3,
    title: 'que est esse lorem any text without any meaning',
    body: 'lorem, lorem, lorem, lorem'
  },
  {
    id: 4,
    title: 'que est esse heq sjks lorem any text without any meaning',
    body: 'lorem, lorem, lorem, lorem'
  },
  {
    id: 5,
    title: 'que est esse lorem',
    body: 'lorem, lorem, lorem, lorem'
  }
]

export default class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postTitle: '',
      postList: DATA
    }
  }

  handleSubmitForm = (e) => {
    e.preventDefault();
    const copiedArray = [...this.state.postList]
    if (this.state.postTitle && this.state.postTitle.trim())
    copiedArray.push({
      id: Math.random(),
      body: '',
      title: this.state.postTitle
    })
    this.setState({postList: copiedArray})
    this.setState({postTitle: ''})
  }

  handleChangeInput = e => {
    this.setState({
      postTitle: e.target.value
    })
  }

  handleDelete = (id) => {
    console.log(id, 'id')
    const filteredArr = this.state.postList.filter(i => i.id !== id)
    this.setState({ postList: filteredArr })
  }

  render() {
    return (
      <div className={styles.info}>
        <form onSubmit={this.handleSubmitForm}>
          <TextField
            id="standard-basic"
            label="enter title text"
            variant="outlined"
            type="text"
            // placeholder='enter title text'
            value={this.state.postTitle}
            onChange={this.handleChangeInput}
          />

          <Button
            variant="contained"
            type='submit'
            size='small'
            className={styles.btn}>Add</Button>
        </form>
        {this.state.postList.map((item) => {
          return (
            <div key={item.id} className={styles.list}>
              {item.title}
              <Button
                className={styles.btn}
                size='small'
                variant="contained"
                onClick={() => this.handleDelete(item.id)}
                startIcon={<DeleteIcon/>}
              >Delete</Button>
              {/*//*/}
            </div>
          )
        })}
      </div>
    )
  }
}