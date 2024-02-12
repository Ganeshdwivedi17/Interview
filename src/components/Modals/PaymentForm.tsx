import { FormSelect, Modal } from 'react-bootstrap';
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement
} from '@stripe/react-stripe-js';
import { StripeElements } from '@stripe/stripe-js';

import applyPayIcon from '../../images/applePay.png';
import { SuccessData, useCharge } from '../../hooks/useStripe';
import loadingIcon from '../../images/loading.gif';
import { countries } from '../../countries';
 
const PaymentForm = ({ handleClose, successHandle }: PaymentFormProps) => {

  const onSuccess = (data: SuccessData, elements: StripeElements | null) => {
    handleClose();
    successHandle(data.subscription.id, data.customer?.id);
    elements?.getElement(CardCvcElement)?.clear();
    elements?.getElement(CardExpiryElement)?.clear();
    elements?.getElement(CardNumberElement)?.clear();
  };
  const onFail = () => console.log('FAILED');

  const {
    handleChange,
    handleSubmit,
    isDisable,
    name,
    setName,
    email,
    setEmail,
    isLoading
  } = useCharge({ onSuccess, onFail });

// const close = () => {
//   handleClose();
//   Hide()
// }
// const Hide =()=>{
//     handleClose();
// }

  return (
    <Modal
      className={`modal-primary payment-fields-modal`}
      show={true}
      onHide={handleClose}
      centered
    >
      <Modal.Header className='flex-column-reverse'></Modal.Header>
      <Modal.Body>
        <div className='fields-contanier'>
          <Plans />

          <div>
            <svg
              width='108'
              height='81'
              viewBox='0 0 108 81'
              fill='none'
              style={{ position: 'absolute', left: 0, top: 0 }}
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M104 -6.50106C93.5485 21.4981 10.8505 77.0009 -25.5001 76.9999'
                stroke='#7685FE'
                stroke-width='6.85171'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M89.9136 -8.99912C69.0124 21.5 10.9221 61.3205 -20.473 52.8577'
                stroke='#AEB8FF'
                stroke-width='6.39492'
                stroke-linecap='round'
              />
              <path
                d='M68.1031 -2.49908C59.016 4.00251 29.0266 30.4983 -4.59809 36.9984'
                stroke='#01EBDE'
                stroke-width='5.93814'
                stroke-linecap='round'
              />
            </svg>

            <svg
              onClick={()=>handleClose()}
              xmlns='http://www.w3.org/2000/svg'
              width='12'
              height='12'
              viewBox='0 0 12 12'
              fill='none'
              className='align-self-end payment-close-icon'
            >
              <path
                fill-rule='evenodd'
                clipRule='evenodd'
                d='M2.66958 1.11595C2.24121 0.687583 1.58365 0.650726 1.20083 1.03354C0.818022 1.41635 0.85502 2.07377 1.28339 2.50214L4.85156 6.07031L1.11946 9.80242C0.690564 10.2313 0.655277 10.8897 1.04079 11.2752C1.4263 11.6607 2.08465 11.6254 2.51355 11.1965L6.24565 7.4644L9.9663 11.185C10.3947 11.6134 11.0521 11.6504 11.4349 11.2676C11.8177 10.8848 11.7809 10.2272 11.3525 9.79886L7.63184 6.07821L11.1964 2.51368C11.6251 2.08495 11.6604 1.42661 11.2749 1.0411C10.8893 0.655582 10.231 0.690858 9.80228 1.1196L6.23775 4.68412L2.66958 1.11595Z'
                fill='white'
              />
            </svg>
            <div className='payment-form'>
              <div className='apple-pay'>
                <img src={applyPayIcon} width={60} alt='apple-pay' />
              </div>
              <hr className='mt-25 mb-25' />
              <label className='payment-field-label'>Email</label>
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                type='email'
                className='mb-5px payment-field-custom payment-field'
              />
              <label className='payment-field-label mt-10px'>
                Card information
              </label>
              <CardNumberElement
                onChange={handleChange}
                options={{ ...option, showIcon: true }}
              />
              <div className='flex justify-between mb-5px'>
                <CardExpiryElement
                  onChange={handleChange}
                  options={{ ...optiondate }}
                />
                <CardCvcElement
                  onChange={handleChange}
                  options={{ ...optioncvc }}
                />
              </div>
              <label className='payment-field-label mt-10px'>
                Cardholder name
              </label>
              <input
                value={name}
                onChange={e => setName(e.target.value)}
                className='mb-5px payment-field-custom payment-field'
                placeholder='Full name on card'
              />
              <label className='payment-field-label mt-10px'>
                Country or region
              </label>
              <FormSelect
                defaultValue='United States'
                className='payment-field-custom payment-field'
                style={{
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0
                }}
              >
                {countries.map(val => (
                  <option key={val.name}>{val.name}</option>
                ))}
              </FormSelect>
              <input
                style={{
                  borderTop: 'none !important',
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0
                }}
                className='payment-field-custom payment-field'
                placeholder='ZIP'
              />
              <button
                disabled={isDisable}
                onClick={() => !isDisable && handleSubmit()}
                className={isDisable ? 'cursor-notallowed pay-btn' : 'pay-btn'}
              >
                {isLoading ? (
                  <img src={loadingIcon} alt='loading' width={50} />
                ) : (
                  'Pay £14.99'
                )}
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PaymentForm;

interface PaymentFormProps {
  handleClose: () => void;
  successHandle: (subId: string, cusId?: string) => void;
}

const Plans = () => {
  return (
   <div className='plans-container'>
    <div style={{background:" rgba(217, 217, 217, 0.1)",width:"100%",height:"191px",position:"absolute",top:"0",zIndex:"1"}}></div>
      <svg
        style={{ position: 'absolute', top: 20, right: 0 }}
        width='35'
        height='66'
        viewBox='0 0 35 66'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M69.9877 50.3793C69.987 31.4937 41.323 62.0426 3.99965 62.0422'
          stroke='#7685FE'
          stroke-width='6.85171'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M90.6394 16.5364C89.7442 3.48711 77.3171 31.6897 11.4841 39.5502'
          stroke='#AEB8FF'
          stroke-width='6.39492'
          stroke-linecap='round'
        />
        <path
          d='M54 13.416C54 13.416 46 17.7898 23.659 20.1612'
          stroke='#01EBDE'
          stroke-width='5.93814'
          stroke-linecap='round'
        />
      </svg>

      <h3>
        Video<span style={{ color: '#AEB8FF' }}>Interviews</span>.io
      </h3>
      <div className='plans'>
        <span className='plan-type plan-b'>
          <svg
            width='9'
            height='9'
            viewBox='0 0 9 9'
            fill='none'
            className='mr-5'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M7.52616 3.35416C8.1812 3.73234 8.1812 4.67781 7.52616 5.056L2.22384 8.1173C1.5688 8.49548 0.75 8.02275 0.75 7.26638L0.75 1.14378C0.75 0.387406 1.5688 -0.0853282 2.22384 0.292859L7.52616 3.35416Z'
              fill='white'
            />
          </svg>
          Basic
        </span>
        <span className='plan-type plan-p'>
          <svg
            width='10'
            height='10'
            viewBox='0 0 10 10'
            fill='none'
            className='mr-5'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M3.84351 9.12753C3.52965 9.03978 3.22702 8.91625 2.94086 8.75912L3.01553 8.19147C3.05 7.92957 2.90841 7.67692 2.6789 7.59068C2.52592 7.5332 2.39316 7.4287 2.29499 7.28853L1.99262 6.85685C1.98309 6.84326 1.97793 6.827 1.97767 6.8099L1.9641 5.89332C1.96352 5.85402 1.98995 5.81971 2.02555 5.81351C2.25919 5.77277 2.42228 5.54008 2.39685 5.28374L2.37102 5.02333C2.35776 4.88954 2.29324 4.76683 2.19401 4.68667L2.00345 4.53274C1.7999 4.36833 1.54827 4.27777 1.29491 4.27777H1.16914C1.12548 4.27777 1.08155 4.27392 1.03851 4.26635L0.785083 4.22172C0.964969 3.24075 1.4822 2.35426 2.25568 1.7085C2.80087 1.25333 3.45249 0.940144 4.14478 0.799793C4.2498 0.894992 4.33107 1.01709 4.3818 1.15679L4.39232 1.18578C4.41866 1.25831 4.43619 1.33438 4.4444 1.41188L4.45375 1.50008C4.47036 1.65696 4.44833 1.81632 4.39008 1.96092L4.2892 2.21135C4.22315 2.37523 4.11479 2.51229 3.97579 2.60763L3.8501 2.69387C3.72274 2.78122 3.64829 2.93725 3.65578 3.10103L3.67277 3.47102C3.67363 3.48991 3.66557 3.50246 3.65866 3.50967C3.65175 3.51687 3.6399 3.52501 3.62259 3.52329C3.60729 3.5217 3.59381 3.51195 3.58651 3.49721L3.43213 3.18481C3.37869 3.07661 3.28572 2.99562 3.17708 2.96258L2.63144 2.79664C2.48804 2.75303 2.33441 2.766 2.19889 2.83311L2.06895 2.89747C1.79559 3.03286 1.64619 3.36254 1.71371 3.68132C1.74043 3.80756 1.79902 3.92274 1.88308 4.01433L2.2376 4.40064C2.25759 4.42238 2.27674 4.44559 2.29459 4.46958L2.53763 4.7962C2.64496 4.94044 2.80407 5.02307 2.97444 5.02305H2.97617L3.63832 5.02085C3.7061 5.02085 3.76998 5.06043 3.80415 5.12428C3.88364 5.27279 4.01774 5.37866 4.17207 5.41469L4.42017 5.47261C4.47472 5.48535 4.52133 5.52325 4.54803 5.57663L4.66785 5.81598C4.71589 5.91196 4.78856 5.98886 4.87801 6.03839L5.44113 6.35019C5.48744 6.37584 5.5142 6.43079 5.50778 6.48696C5.50405 6.5195 5.48959 6.54939 5.46703 6.57112L5.25313 6.77729C5.19283 6.83541 5.14601 6.90956 5.11772 6.99171L5.07108 7.12721C5.05689 7.1685 5.02731 7.20186 4.98991 7.21874L4.76208 7.32167C4.56802 7.40934 4.4426 7.61393 4.4426 7.84286C4.4426 7.86859 4.43679 7.89427 4.42583 7.91709L3.84351 9.12753Z'
              fill='white'
            />
            <path
              d='M7.8405 1.79085C8.07306 1.99645 8.28129 2.22529 8.46365 2.47556L8.09689 2.38379C7.97927 2.35436 7.85841 2.38552 7.76533 2.46918C7.67223 2.55286 7.62123 2.67627 7.62543 2.80772C7.62561 2.81315 7.62312 2.8184 7.6189 2.82138L7.3495 3.0131C7.34497 3.01631 7.3392 3.01651 7.33451 3.01358L6.95502 2.77809C6.92126 2.75712 6.90385 2.71369 6.91272 2.67244L6.99811 2.27529C7.00726 2.23276 7.04164 2.20223 7.08171 2.20102L7.40321 2.19127C7.61886 2.18473 7.79837 2.01314 7.8405 1.79085Z'
              fill='white'
            />
            <path
              d='M9.12085 6.18196L9.09923 6.15282C9.01033 6.03316 8.87783 5.96722 8.74174 5.96722C8.69001 5.96722 8.63775 5.97675 8.58718 5.99649L8.38929 6.07371C8.29147 6.11191 8.18515 6.12531 8.08199 6.11244L8.02387 6.10521C7.78249 6.07518 7.57244 5.90565 7.47572 5.66281C7.42029 5.52371 7.40529 5.37154 7.4323 5.22279L7.55196 4.56384C7.57735 4.42403 7.63869 4.29583 7.72937 4.1931L7.77659 4.13958C7.93159 3.96395 8.15597 3.88225 8.3767 3.92105L8.69048 3.9762C8.6927 3.97659 8.69494 3.97707 8.69718 3.97766L9.19241 4.10806C9.25437 4.40042 9.28571 4.69989 9.28571 4.99998C9.28573 5.40488 9.23045 5.80037 9.12085 6.18196Z'
              fill='white'
            />
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5ZM5.00001 9.28571C4.7383 9.28571 4.47709 9.26187 4.22053 9.21468L4.75446 8.10479C4.79318 8.02432 4.81367 7.93372 4.81367 7.84284C4.81367 7.77797 4.84921 7.71997 4.9042 7.69512L5.13205 7.59219C5.26401 7.53255 5.36842 7.41479 5.41854 7.26913L5.46516 7.13371C5.47224 7.11318 5.48393 7.09464 5.49899 7.08012L5.7129 6.87394C5.80312 6.78697 5.86102 6.66733 5.87597 6.53712C5.90179 6.31238 5.79461 6.0924 5.60926 5.98975L5.04612 5.67795C5.02378 5.66558 5.00561 5.64636 4.99362 5.62237L4.8738 5.38302C4.79529 5.22614 4.65828 5.11472 4.49793 5.07726L4.24985 5.01935C4.19735 5.0071 4.15173 4.97106 4.12468 4.92056C4.02422 4.73291 3.8382 4.61655 3.63892 4.61655H3.63719L2.97506 4.61875C2.9171 4.61875 2.86237 4.59064 2.82586 4.54158L2.5828 4.21496C2.55686 4.18009 2.52897 4.14636 2.49994 4.11474L2.14544 3.72848C2.11061 3.69054 2.08634 3.64281 2.07526 3.59048C2.04729 3.45834 2.10921 3.32169 2.2225 3.26558L2.35243 3.20122C2.40862 3.17341 2.47229 3.16802 2.53174 3.1861L3.07738 3.35204C3.08933 3.35569 3.09955 3.36459 3.10545 3.3765L3.25985 3.68891C3.32603 3.82282 3.44848 3.91136 3.58744 3.92579C3.70803 3.93834 3.8275 3.89317 3.91511 3.80193C4.00271 3.7107 4.04946 3.58271 4.04342 3.45083L4.02643 3.08083C4.02562 3.06279 4.0338 3.04563 4.04783 3.03602L4.17352 2.94978C4.37553 2.81119 4.53302 2.61205 4.629 2.37388L4.72988 2.12345C4.81454 1.91331 4.84654 1.68174 4.8224 1.45372L4.81305 1.36552C4.80113 1.25294 4.77566 1.1424 4.73737 1.03699L4.72684 1.00797C4.69128 0.910096 4.64524 0.818266 4.59014 0.73377C4.72626 0.720807 4.86342 0.714286 5.00003 0.714286C5.89646 0.714286 6.75086 0.986584 7.47745 1.5028L7.47883 1.69008C7.47921 1.74213 7.44067 1.78566 7.39292 1.78713L7.07144 1.79688C6.86308 1.80318 6.68438 1.96203 6.63687 2.18313L6.55148 2.58024C6.50538 2.79462 6.59583 3.02048 6.7714 3.12943L7.15087 3.36492C7.21043 3.40187 7.27615 3.42026 7.34173 3.42026C7.41506 3.42026 7.48822 3.39727 7.55239 3.35162L7.82179 3.1599C7.93407 3.08002 8.0009 2.93969 7.99624 2.79371C7.99617 2.79161 7.99599 2.78596 8.00146 2.78106C8.00699 2.77613 8.01198 2.77743 8.01383 2.77787L8.42992 2.88199C8.44026 2.88459 8.45082 2.88673 8.46145 2.88837L8.75559 2.93437C8.8835 3.1664 8.98928 3.4093 9.07181 3.66035L8.78442 3.58466C8.77296 3.58164 8.76124 3.57905 8.74959 3.577L8.43576 3.52186C8.095 3.46199 7.74847 3.58808 7.50912 3.85933L7.4619 3.91285C7.3219 4.07149 7.22718 4.26946 7.18796 4.48535L7.06831 5.1443C7.02658 5.374 7.04975 5.60896 7.1353 5.82377C7.28467 6.1988 7.609 6.46058 7.98173 6.50692L8.03986 6.51415C8.19925 6.53401 8.36336 6.5133 8.51436 6.45435L8.71226 6.37711C8.74751 6.36334 8.78711 6.37541 8.81078 6.40724L8.83675 6.44218C8.84889 6.45851 8.85585 6.47905 8.85644 6.5L8.86582 6.8514C8.15525 8.33184 6.6434 9.28571 5.00001 9.28571ZM2.594 8.54646L2.64825 8.13405C2.65749 8.0638 2.61951 7.99604 2.55795 7.9729C2.33563 7.88936 2.1427 7.73755 2.00003 7.53383L1.69765 7.10214C1.63966 7.01936 1.6082 6.92056 1.60666 6.81642L1.59309 5.89983C1.58954 5.66079 1.75024 5.45203 1.9669 5.41428C2.0053 5.40758 2.0321 5.36932 2.02793 5.3272L2.0021 5.06682C1.99994 5.04482 1.98931 5.02464 1.97302 5.01148L1.78245 4.85755C1.6424 4.74441 1.46925 4.68209 1.29491 4.68209H1.16914C1.10571 4.68209 1.04182 4.67651 0.979303 4.66548L0.731003 4.62176C0.719888 4.74798 0.714286 4.87453 0.714286 5C0.714286 6.4181 1.42812 7.75277 2.594 8.54646Z'
              fill='white'
            />
          </svg>
          Professional
        </span>
      </div>
      <div className='plan-info'>
        <div>
          <div className='amount'>£14.99</div>
          <div className='back'>14 days Money Back Guarantee</div>
        </div>
        <div className='features'>
          {features.map(value => (
            <div key={value} className='feature-item'>
              <svg
                width='23'
                height='23'
                viewBox='0 0 23 23'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M0 5C0 2.23858 2.23858 0 5 0H18C20.7614 0 23 2.23858 23 5V18C23 20.7614 20.7614 23 18 23H5C2.23858 23 0 20.7614 0 18V5Z'
                  fill='#00D9CD'
                />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M15.0075 7.13686L10.6298 11.5151L9.35401 10.2865L9.33044 10.2627C8.71628 9.6487 7.72358 9.6487 7.11003 10.2627C6.49587 10.8769 6.49587 11.8692 7.11003 12.4834L7.1336 12.5068L9.49569 14.8693C10.0967 15.4965 11.0784 15.5067 11.6928 14.8925L11.7161 14.8693L17.228 9.35713L17.2396 9.34565C17.8605 8.72508 17.855 7.72723 17.228 7.11326L17.2163 7.10177C16.5954 6.49439 15.6086 6.50991 15.0075 7.13686Z'
                  fill='white'
                />
              </svg>

              {value}
            </div>
          ))}
        </div>
       <button id='PAYMENT_CARDsfasdfg' style={{cursor:"pointer"
,border:"none",width:"284px",height:"58px",background:"rgba(84, 104, 255, 1)",color:"white",borderRadius:"8px",fontSize:"14px",fontWeight:"600", marginTop:"20px"}}>Upgrade Plan</button>
        {/* <UpgradePlan /> */}
      </div>
      <svg
        width='82'
        height='67'
        viewBox='0 0 82 67'
        fill='none'
        className='bottom-icon-svg'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M48.1435 40.389C47.0672 31.4265 52.3058 21.5378 60.1202 20.5993C67.9345 19.6609 75.3655 28.0282 76.4418 36.9907C77.5181 45.9532 72.0558 53.9795 64.2415 54.9179C56.4271 55.8563 49.2198 49.3515 48.1435 40.389Z'
          fill='#7686FF'
        />
        <path
          d='M-19.9921 61.3336C-21.7901 46.3616 -8.25392 32.4237 4.817 30.8541C17.8879 29.2844 29.9416 40.1491 31.7396 55.1212C33.5376 70.0932 24.399 83.503 11.3281 85.0726C-1.74281 86.6423 -18.1941 76.3057 -19.9921 61.3336Z'
          fill='#ADB8FA'
        />
        <path
          d='M22.7 17.2352C21.9602 11.0752 26.0925 5.51336 31.9296 4.81238C35.6251 4.36859 36.6082 6.2691 39.5938 6.93817C41.9823 7.47343 46.3194 6.32839 47.2748 14.284C48.0146 20.4439 40.4456 26.4185 34.6085 27.1195C28.7713 27.8204 23.4397 23.3951 22.7 17.2352Z'
          fill='#01EBDE'
        />
      </svg>
    </div>
  );
};

const features = [
  'Unlimited Video Interviews',
  'Unlimited Messaging',
  'Team Collaboration',
  'Private Interviews'
];

const UpgradePlan = () => (
  <svg
    width='334'
    height='108'
    viewBox='0 0 334 108'
    fill='none'
    className='upgrade-plan'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clip-path='url(#clip0_2434_2332)' filter='url(#filter0_d_2434_2332)'>
      <rect
        x='25.084'
        y='15'
        width='283.842'
        height='58'
        rx='8'
        fill='#5468FF'
      />
      <path
        d='M115.225 48.1299C112.723 48.1299 111.616 46.6328 111.616 44.2812V38.3408H113.086V44.1172C113.086 45.7783 113.605 46.708 115.225 46.708C116.852 46.708 117.379 45.7715 117.379 44.1035V38.3408H118.848V44.2129C118.848 46.626 117.727 48.1299 115.225 48.1299ZM122.316 48V38.3408H125.222C127.183 38.3408 128.578 39.3662 128.578 41.1572C128.578 42.9346 127.19 43.9189 125.222 43.9189H123.779V48H122.316ZM123.779 42.5449H125.222C126.527 42.5449 127.122 42.0596 127.122 41.1572C127.122 40.2412 126.507 39.7148 125.222 39.7148H123.779V42.5449ZM135.238 48.1299C132.162 48.1299 130.665 45.8809 130.665 43.167C130.665 40.4463 132.141 38.1973 135.252 38.1973C137.152 38.1973 138.608 39.1406 139.367 40.918L138.061 41.4648C137.59 40.0977 136.571 39.4824 135.238 39.4824C133.098 39.4824 132.121 41.1094 132.121 43.1055C132.121 45.1562 133.051 46.8105 135.238 46.8105C136.831 46.8105 137.925 45.9424 138.041 44.3018L138.075 44.0488H135.84V42.8594H139.524V48H138.355L138.225 46.5166C137.672 47.5146 136.605 48.1299 135.238 48.1299ZM142.828 48V38.3408H145.808C147.634 38.3408 149.11 39.3525 149.11 41.1299C149.11 42.3809 148.317 43.29 147.169 43.6387L149.855 48H148.174L145.747 43.7891C145.562 43.7891 145.357 43.7959 145.159 43.7959H144.298V48H142.828ZM144.311 42.5928H145.938C147.025 42.5586 147.654 42.0254 147.654 41.1572C147.654 40.2344 146.957 39.6602 145.822 39.6602H144.311V42.5928ZM151.313 48L155.087 38.3408H156.215L159.974 48H158.389L157.602 45.8262H153.72L152.92 48H151.313ZM154.178 44.5615H157.138L155.661 40.4805L154.178 44.5615ZM162.533 48V38.3408H165.267C168.528 38.3408 170.264 40.1045 170.264 43.2422C170.264 46.2568 168.48 48 165.254 48H162.533ZM164.003 46.6465H165.117C167.393 46.6465 168.795 45.6826 168.795 43.1807C168.795 40.7539 167.735 39.6943 165.247 39.6943H164.003V46.6465ZM173.281 48V38.3408H179.673V39.6943H174.751V42.4834H179.276V43.8369H174.751V46.6123H179.673V48H173.281ZM187.312 48V38.3408H190.218C192.18 38.3408 193.574 39.3662 193.574 41.1572C193.574 42.9346 192.186 43.9189 190.218 43.9189H188.775V48H187.312ZM188.775 42.5449H190.218C191.523 42.5449 192.118 42.0596 192.118 41.1572C192.118 40.2412 191.503 39.7148 190.218 39.7148H188.775V42.5449ZM196.461 48V38.3408H197.93V46.6123H202.155V48H196.461ZM203.757 48L207.53 38.3408H208.658L212.418 48H210.832L210.046 45.8262H206.163L205.363 48H203.757ZM206.621 44.5615H209.581L208.104 40.4805L206.621 44.5615ZM220.766 38.3408H222.175V48H220.691L216.391 40.7539V48H214.976V38.3408H216.453L220.766 45.5596V38.3408Z'
        fill='white'
      />
    </g>
    <defs>
      <filter
        id='filter0_d_2434_2332'
        x='0'
        y='0'
        width='334'
        height='108'
        filterUnits='userSpaceOnUse'
        color-interpolation-filters='sRGB'
      >
        <feFlood flood-opacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy='10' />
        <feGaussianBlur stdDeviation='12.5' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0.330297 0 0 0 0 0.409583 0 0 0 0 1 0 0 0 0.3 0'
        />
        <feBlend
          mode='normal'
          in2='BackgroundImageFix'
          result='effect1_dropShadow_2434_2332'
        />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='effect1_dropShadow_2434_2332'
          result='shape'
        />
      </filter>
      <clipPath id='clip0_2434_2332'>
        <rect
          width='284'
          height='58'
          fill='white'
          transform='translate(25 15)'
        />
      </clipPath>
    </defs>
  </svg>
);

const option = {
  classes: {
    base: `payment-field card-field`,
    focus: 'shadow-input',
    invalid: 'border-red-600'
  },
  style: {
    base: {
      color: '#000',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      borderBottomLeftRadius: "25px",
      borderBottomRightRadius: 0
    }
  }
};

const optiondate = {
  classes: {
    base: `payment-field date-field`,
    focus: 'shadow-input',
    invalid: 'border-red-600'
  },
  style: {
    base: {
      color: '#000',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif'
    }
  }
};

const optioncvc = {
  classes: {
    base: `payment-field cvc-field`,
    focus: 'shadow-input',
    invalid: 'border-red-600'
  },
  style: {
    base: {
      color: '#000',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif'
    }
  }
};
