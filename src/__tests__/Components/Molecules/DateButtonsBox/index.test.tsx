import React from 'react';
import { render, screen } from '@testing-library/react';

import DateButtonsBox from "../../../../Components/Molecules/DateButtonsBox";
import Button from "../../../../Components/Atoms/Button/Button";

it('renders dateButtonsBox children', () => {
    render(
        <DateButtonsBox>
            <Button date={ new Date() } content='testButtonsBox' clicker={ () => console.log('testButtonsBox')} />
        </DateButtonsBox>);
    expect(screen.getByText('testButtonsBox')).toBeInTheDocument();
});