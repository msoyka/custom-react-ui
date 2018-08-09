import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './index';

const stories = storiesOf('Button', module);

stories.add('Default', () => <Button value="Push Me" />);
