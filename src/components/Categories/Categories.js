import React, { useEffect, useState } from 'react';
import './Categories.css';
import { styled } from '@mui/material';
import axios from 'axios';

const Categories = () => {
  const [data, setData] = useState([]);
  const [opened, setOpened] = useState(false);
  const [selectParent, setSelectedParent] = useState();

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get(
        'https://kdwed-f1dd2-default-rtdb.europe-west1.firebasedatabase.app/categories.json'
      );
      setData(response.data);
    };
    fetchCategories();
  }, [opened]);

  const Wrapper = styled('div')`
    position: relative;
    z-index: 1000;
    width: 10%;
    height: 10%;
    margin: 5px;
    border: 1px solid black;
    margin-right: 10px;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.2s;
    background-color: white;
  `;

  const List = styled('li')`
    border-bottom: 1px solid #e5e5e5;
    font-size: 16px;
    color: #0089d0;
  `;

  return (
    <div>
      <Wrapper
        onMouseEnter={(e) => {
          if (!opened) setOpened(true);
        }}
        onMouseLeave={(e) => {
          if (opened) setOpened(false);
        }}
      >
        <div>
          <div style={{ color: '#0089D0', fontSize: '16px' }}>Categories</div>
          {opened && (
            <div
              className='categories__parent'
              onMouseLeave={(e) => {
                if (opened) setOpened(false);
              }}
            >
              <ul className='categories__list'>
                {data &&
                  data.map((parent) => (
                    <List key={parent.id}>
                      <div onMouseEnter={(e) => setSelectedParent(parent.id)}>
                        {parent.name}
                      </div>
                      {selectParent === parent.id && (
                        <div className='children__parent-divs'>
                          {parent.childCategories.map((item) => (
                            <div key={item.id} className='children__parent-div'>
                              <div>{item.name}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </List>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </Wrapper>
    </div>
  );
};

export default Categories;
