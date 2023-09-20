import {
  Container,
  Itemtitle,
  Descr,
  MainInfoWrapper,
  MainDescr,
  ExtraInfo,
  ExtraInfoTitle,
  ConditionsWrapper,
  Conditions,
  ContactUs,
  ContactUsContainer,
} from './MoreCarInfo.styled';

const MoreCarInfo = ({ data, city, contry }) => {
  const [age, license, deposit] = data.rentalConditions.split('\n');
  const minAge = age.split(': ');

  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    <Container>
      <img src={data.img} alt="car-card" />
      <MainInfoWrapper>
        <Itemtitle>
          {data.make} <span>{data.model}</span>, {data.year}
        </Itemtitle>
        <Descr>
          {[
            city,
            contry,
            `id: ${data.id}`,
            `Year: ${data.year}`,
            `Type: ${data.type}`,
          ].join(' | ')}
        </Descr>
        <Descr>
          {[
            `Fuel Consumption: ${data.fuelConsumption}`,
            `Engine Size: ${data.engineSize}`,
          ].join(' | ')}
        </Descr>
        <MainDescr>{data.description}</MainDescr>
      </MainInfoWrapper>
      <ExtraInfo>
        <ExtraInfoTitle>Accessories and functionalities:</ExtraInfoTitle>
        <Descr>{data.accessories.join(' | ')}</Descr>
        <Descr>{data.functionalities.join(' | ')}</Descr>
      </ExtraInfo>
      <ExtraInfo>
        <ExtraInfoTitle>Rental Conditions: </ExtraInfoTitle>
        <ConditionsWrapper>
          <Conditions>
            {minAge[0]}: <span>{minAge[1]}</span>
          </Conditions>
          <Conditions>{license}</Conditions>
        </ConditionsWrapper>
        <ConditionsWrapper>
          <Conditions>{deposit}</Conditions>
          <Conditions>
            Mileage: <span>{formatNumberWithCommas(data.mileage)}</span>
          </Conditions>
          <Conditions>
            Price: <span>{data.rentalPrice}</span>
          </Conditions>
        </ConditionsWrapper>
      </ExtraInfo>
      <ContactUsContainer>
        <ContactUs href="tel:+380730000000">Rental car</ContactUs>
      </ContactUsContainer>
    </Container>
  );
};

export default MoreCarInfo;
