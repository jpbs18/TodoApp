import React from "react"
import axios from "axios"
import PageHeader from "../template/pageHeader"
import TodoForm from "../todo/todoForm"
import TodoList from "../todo/todoList"


const URL = "http://localhost:3003/api/todos"

export default class Todo extends React.Component {

    constructor(props){
        super(props)
        this.state = {description: "" , list: []}
        this.handleRemove = this.handleRemove.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleDone = this.handleDone.bind(this)
        this.handlePending = this.handlePending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.refresh()
    }

    refresh(description = ""){
        const search = description ? `&description__regex=/${description}/` : ""
        axios.get(`${URL}?sort=-createdAt${search}`).then(resp => this.setState({...this.state, description, list: resp.data}))
    }

    handleClear(){
        this.refresh()
    }

    handleSearch(){
        this.refresh(this.state.description)
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd(){
        const description = this.state.description
        axios.post(URL, {description}).then(resp => this.refresh())
        this.refresh()
    }

    handleRemove(id){
        axios.delete(`${URL}/${id}`).then(resp => this.refresh(this.state.description))
    }

    handleDone(todo){
        axios.put(`${URL}/${todo._id}`, {...todo, done: true}).then(resp => this.refresh(this.state.description))
    }

    handlePending(todo){
        axios.put(`${URL}/${todo._id}`, {...todo, done: false}).then(resp => this.refresh(this.state.description))
    }

    render(){
        return(
            <div>
                <PageHeader name="Tasks" small="Register" />
                <TodoForm handleAdd={this.handleAdd} 
                          handleChange={this.handleChange} 
                          handleSearch={this.handleSearch}
                          handleClear={this.handleClear}
                          description={this.state.description}/>

                <TodoList list={this.state.list} 
                          handleRemove={this.handleRemove}
                          handleDone={this.handleDone}
                          handlePending={this.handlePending}/>
            </div>
        )
    }
}