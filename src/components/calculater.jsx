import React ,{Component} from 'react';

class Calculater extends Component{
    state ={
        result : 0,
        num1:0,
        num2:0,
        flag:false,
        method:''
    };

    calculate=()=>{
        switch (this.state.method) {
            case 'add': return this.setState({result : this.state.num1 + this.state.num2} ,() => {
                        this.setState({num1 : this.state.result , num2 : 0})    });
                        
            case 'sub': return this.setState({result : this.state.num1 - this.state.num2},() => {
                        this.setState({num1 : this.state.result , num2 : 0})    });
                        
            case 'mul': return this.setState({result : this.state.num1 * this.state.num2},() => {
                        this.setState({num1 : this.state.result , num2 : 0})    });
                        console.log(this.state.result);
                        
            case 'div': return this.setState({result : this.state.num1 / this.state.num2},() => {
                        this.setState({num1 : this.state.result , num2 : 0})    });

            case 'rem': return this.setState({result : this.state.num1 % this.state.num2},() => {
                        this.setState({num1 : this.state.result , num2 : 0})    });
                        break;
            default: return <span>Undefined</span>        
        }
    }
    
    resetData=()=>{
        return this.setState({result:0 ,
            num1:0,
            num2:0,
            flag:false,
            method:''});
    }

    showData=(e)=>{ 
        if(e.target.id === 'sol')
            this.calculate();
        if(isNaN(Number(e.target.id))){
            this.setState({method : e.target.id});
            this.setState({flag : true});
            return;
        } 
        else if(!this.state.flag){
            var temp = (this.state.num1*10);
            this.setState({num1: temp+Number(e.target.id)});
        }
        else{
            var temp = (this.state.num2*10);
            this.setState({num2: temp+Number(e.target.id)});
        }
    }


    render(){
        return <div>
            <h1>Calculater</h1>
            <h3>Result: {this.state.result}</h3>
            <span>{this.state.num1}  {this.state.num2}</span>
            <button onClick={this.resetData} id="reset">Reset</button><br></br>
            <button onClick={this.showData} id="add">+</button>
            <button onClick={this.showData} id="mul">*</button>
            <button onClick={this.showData} id="sub">-</button>
            <button onClick={this.showData} id="sol">=</button><br></br>
            <button onClick={this.showData} id="0">0</button>
            <button onClick={this.showData} id="1">1</button>
            <button onClick={this.showData} id="2">2</button>
            <button onClick={this.showData} id="div">/</button><br></br>
            <button onClick={this.showData} id="3">3</button>
            <button onClick={this.showData} id="4">4</button>
            <button onClick={this.showData} id="5">5</button>
            <button onClick={this.showData} id="rem">%</button><br></br>
            <button onClick={this.showData} id="6">6</button>
            <button onClick={this.showData} id="7">7</button>
            <button onClick={this.showData} id="8">8</button>
            <button onClick={this.showData} id="9">9</button>
        </div>
    }
}
export default Calculater;