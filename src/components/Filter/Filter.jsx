import {
  InputBlock,
  InputsBlock,
  Label,
  ModelDropdown,
  ModelInput,
  ModelInputBtn,
  ModelOptionList,
  ModelOptionListItem,
  SectionContainer,
} from './Filter.styled';

export const Filter = () => {
  return (
    <SectionContainer>
      <InputsBlock>
        <InputBlock>
          <Label htmlFor="modelTitle">Car brand</Label>
          <ModelInput
          // id="modelTitle"
          // placeholder="Enter the text"
          // onChange={handleChangeModel}
          // value={model}
          // onKeyDown={event => handleInputKeyPress(event, 'model')}
          />
          <ModelInputBtn></ModelInputBtn>
          <ModelDropdown>
            <ModelOptionList>
              <ModelOptionListItem></ModelOptionListItem>
            </ModelOptionList>
          </ModelDropdown>
        </InputBlock>
        <InputBlock>
          <Label htmlFor="mileageTitle">Car mileage</Label>
          <ModelInput />
          <ModelInputBtn></ModelInputBtn>
          <ModelDropdown>
            <ModelOptionList>
              <ModelOptionListItem></ModelOptionListItem>
            </ModelOptionList>
          </ModelDropdown>
        </InputBlock>
        <InputBlock>
          <Label htmlFor="modelTitle">Car brand</Label>
          <ModelInput />
          <ModelInputBtn></ModelInputBtn>
          <ModelDropdown>
            <ModelOptionList>
              <ModelOptionListItem></ModelOptionListItem>
            </ModelOptionList>
          </ModelDropdown>
        </InputBlock>
      </InputsBlock>
    </SectionContainer>
  );
};
