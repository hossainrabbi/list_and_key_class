import React from 'react';
import data from '../data';
import List from './List';
import { Container, Main } from './styles/Element.style';
import GlobalStyle, { Button } from './styles/Global.style';

class App extends React.Component {
    state = {
        userList: [],
    };

    componentDidMount() {
        this.setState({
            userList: data,
        });
    }

    render() {
        const { userList } = this.state;

        return (
            <Main>
                <GlobalStyle />
                <Container>
                    <h2>{userList.length} - Diploma Students</h2>
                    {userList.map((item) => (
                        <List {...item} key={item.id} />
                    ))}
                    <Button
                        disabled={!userList.length}
                        onClick={() =>
                            userList.length &&
                            this.setState({
                                userList: [],
                            })
                        }
                        allData={userList.length}
                    >
                        {userList.length ? 'Clear All' : 'Empty'}
                    </Button>
                </Container>
            </Main>
        );
    }
}

export default App;
