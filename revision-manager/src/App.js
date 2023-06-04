function App(){
    return (
        <>
            <div>
                <form action="\components\Table.html">
                    <lable>Email ID:</lable>
                    <input  type="email" placeholder="email"></input>
                    <br></br>
                    <lable>Password</lable>
                    <input></input>
                    <br></br>
                    {/* <input type="submit">Login</input>
                    <input>Cancel</input> */}
                    <input type="submit" name="Login"></input>
                </form>
            </div>
        </>
    );
}
export default App;