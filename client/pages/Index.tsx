import '../components/washing-machine.css';

export default function Index() {
  return (
    <div className="min-h-screen bg-main-bg flex justify-center">
      {/* Extended 1563px Block with 5000px height - no top padding */}
      <div 
        className="bg-cream rounded-2xl shadow-lg font-normal relative overflow-hidden"
        style={{ width: '1563px', maxWidth: '100%', height: '5000px' }}
      >
        {/* Header Navigation - centered */}
        <div className="absolute top-0 left-0 right-0 p-8">
          <div className="flex justify-center">
            <div className="flex flex-col lg:flex-row items-end lg:items-stretch gap-5">
              {/* Navigation Section */}
              <div 
                className="rounded-2xl bg-cream shadow-[3px_3px_6px_rgba(0,0,0,0.15)] relative flex flex-wrap items-center justify-center lg:justify-start gap-6 lg:gap-12 px-8 lg:px-16 py-3 font-georgia text-base text-text-gray"
                style={{ fontFamily: 'Georgia, -apple-system, Roboto, Helvetica, sans-serif' }}
              >
                {/* Active Navigation Item */}
                <div className="bg-sage rounded-full shadow-[2px_2px_6px_rgba(0,0,0,0.2)] px-6 py-1 z-10">
                  <span className="text-text-gray whitespace-nowrap">Главная</span>
                </div>
                
                {/* Other Navigation Items */}
                <div className="text-text-gray whitespace-nowrap">
                  Выкуп б/у машин
                </div>
                <div className="text-text-gray whitespace-nowrap">
                  Статьи
                </div>
              </div>

              {/* Phone Number */}
              <div 
                className="rounded-2xl bg-cream-dark shadow-[3px_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center px-8 py-3 min-h-[43px] font-nunito text-lg text-text-gray tracking-wide whitespace-nowrap"
                style={{ fontFamily: 'Nunito, -apple-system, Roboto, Helvetica, sans-serif' }}
              >
                +38 (067) 123-45-67
              </div>
            </div>
          </div>
        </div>

        {/* Background Image positioned with specific screen margins */}
        <img 
          src="https://cdn.builder.io/api/v1/image/assets%2Fea67132b7b3040328d48c651d9c0b32e%2Fc86903c6c01d413da20fdf843ad494db?format=webp&width=1731"
          alt=""
          className="absolute"
          style={{
            top: '150px',
                        left: '50%',
                        transform: 'translateX(-50%) scale(1.1)',
            width: '1731px',
            height: '777px',
            objectFit: 'contain'
          }}
                />

                        {/* Main Title */}
        <div
          className="absolute"
          style={{
            top: '220px',
            left: '202px',
            width: '495px',
            height: '30px'
          }}
        >
          <div
            className="text-center font-noto-serif text-2xl font-medium"
            style={{
              fontSize: '25px',
              letterSpacing: '0.25px',
              lineHeight: 'normal'
            }}
          >
            <span style={{ color: 'rgba(85,85,85,1)' }}>
              Ремонт cтиральных машин в
            </span>
            <span style={{ color: 'rgba(75,75,75,1)' }}>
              {' '}
            </span>
            <span style={{ color: 'rgba(173,216,230,1)' }}>
              Одессе!
            </span>
          </div>
        </div>

        {/* New Gear Image */}
                <img
          src="https://cdn.builder.io/api/v1/image/assets%2F99251f7af2ae428eba301b8c13c1a6a5%2F1833cb34a32d40cf8645d788f38aab08?format=webp&width=800"
          alt="Gear mechanism"
          className="absolute"
          style={{
                                                            top: '215px',
                        left: 'calc(50% - 240px)', // Positioned to the left of washing machine
                                                                                                width: '330px',
            height: '280px',
            objectFit: 'contain'
          }}
        />

                                {/* Tool 1 - Vise */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F99251f7af2ae428eba301b8c13c1a6a5%2F6a10921a25284f10adb24bb387e9efff?format=webp&width=800"
          alt="Vise tool"
          className="absolute"
          style={{
            top: '180px',
            left: '950px',
            width: '60px',
            height: '60px',
            objectFit: 'contain'
          }}
        />

        {/* Tool 2 - Pliers */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F99251f7af2ae428eba301b8c13c1a6a5%2F3d12faef675745399f50f5dc2b7cdb1c?format=webp&width=800"
          alt="Pliers tool"
          className="absolute"
          style={{
            top: '420px',
            left: '150px',
            width: '60px',
            height: '60px',
            objectFit: 'contain'
          }}
        />

        {/* Tool 3 - Wrench */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F99251f7af2ae428eba301b8c13c1a6a5%2F47cd4e76a2a7427da1dffc810bdfd0cc?format=webp&width=800"
          alt="Wrench tool"
          className="absolute"
          style={{
            top: '680px',
            left: '1200px',
            width: '60px',
            height: '60px',
            objectFit: 'contain'
          }}
        />

        {/* Tool 4 - Nut */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F99251f7af2ae428eba301b8c13c1a6a5%2F3abf07b3c92b41fb9fff985a8ba4411b?format=webp&width=800"
          alt="Nut tool"
          className="absolute"
          style={{
            top: '850px',
            left: '400px',
            width: '60px',
            height: '60px',
            objectFit: 'contain'
          }}
        />

        {/* Tool 5 - Screwdriver */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F99251f7af2ae428eba301b8c13c1a6a5%2F9734c7344daf4f619cf9abdc1d2789cb?format=webp&width=800"
          alt="Screwdriver tool"
          className="absolute"
          style={{
            top: '320px',
            left: '1350px',
            width: '60px',
            height: '60px',
            objectFit: 'contain'
          }}
        />

        {/* Contact Form */}
        <div
          className="absolute"
          style={{
                        top: '532px',
            left: 'calc(50% - 350px)',
            width: '392px',
            height: '270px'
          }}
        >
          <div className="flex flex-col justify-center items-center gap-7 h-full">
            {/* Name Field */}
            <div className="w-full">
              <div
                className="text-sm font-nunito text-gray-600 mb-3"
                style={{
                  fontFamily: 'Nunito, -apple-system, Roboto, Helvetica, sans-serif',
                  color: '#555555',
                  letterSpacing: '0.7px'
                }}
              >
                1. Напишите Ваше имя
              </div>
              <div
                className="w-full h-10 px-5 flex items-center rounded-sm"
                style={{
                  border: '0.5px solid rgba(18, 18, 18, 0.25)',
                  background: '#F8F5ED',
                  boxShadow: '1px 4px 5.2px 0px rgba(0, 0, 0, 0.05), -2px -3px 5.8px 0px rgba(255, 255, 255, 0.30)'
                }}
              >
                <span
                  className="text-sm italic font-nunito"
                  style={{
                    fontFamily: 'Nunito, -apple-system, Roboto, Helvetica, sans-serif',
                    color: 'rgba(61, 61, 61, 0.77)',
                    fontSize: '15px',
                    letterSpacing: '0.725px'
                  }}
                >
                  оксана
                </span>
              </div>
            </div>

            {/* Phone Field */}
            <div className="w-full">
              <div
                className="text-sm font-nunito text-gray-600 mb-3"
                style={{
                  fontFamily: 'Nunito, -apple-system, Roboto, Helvetica, sans-serif',
                  color: '#555555',
                  letterSpacing: '0.7px'
                }}
              >
                2. Укажите свой номер телефона
              </div>
              <div
                className="w-full h-10 px-5 flex items-center rounded-sm"
                style={{
                  border: '0.5px solid rgba(18, 18, 18, 0.25)',
                  background: '#F8F5ED',
                  boxShadow: '1px 4px 5.2px 0px rgba(0, 0, 0, 0.05)'
                }}
              >
                <span
                  className="text-sm italic font-nunito"
                  style={{
                    fontFamily: 'Nunito, -apple-system, Roboto, Helvetica, sans-serif',
                    color: 'rgba(61, 61, 61, 0.77)',
                    fontSize: '15px',
                    letterSpacing: '0.725px'
                  }}
                >
                  +380
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <div
              className="w-full h-10 px-5 flex items-center justify-center rounded-sm cursor-pointer"
              style={{
                border: '0.5px solid rgba(18, 18, 18, 0.25)',
                background: '#E5EDEB',
                boxShadow: '1px 4px 5.2px 0px rgba(0, 0, 0, 0.10), -2px -3px 5.8px 0px rgba(255, 255, 255, 0.30)',
                width: '332px'
              }}
            >
              <span
                className="text-sm font-nunito"
                style={{
                  fontFamily: 'Nunito, -apple-system, Roboto, Helvetica, sans-serif',
                  color: '#585858',
                  fontSize: '14px',
                  letterSpacing: '0.56px',
                  fontWeight: '500'
                }}
              >
                Получить помощь
              </span>
            </div>
          </div>
        </div>

        {/* Circle Background for Washing Machine */}
        <div 
          className="absolute"
          style={{
            top: '300px', // 150px from background image top (150px + 150px)
            left: '50%',
            transform: 'translateX(-50%)',
            width: '170px',
            height: '170px',
            backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2Fea67132b7b3040328d48c651d9c0b32e%2Fe4393fee017446549d05272fddff3395?format=webp&width=170)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '50%'
          }}
        >
          {/* Animated Washing Machine - Resized to 120x120 to fit inside circle */}
          <div 
            className="absolute"
            style={{ 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%) scale(0.6)' // Scale down to 120x120 (from 200x200)
            }}
          >
            <div id="washer">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" style={{ display: 'none' }}>
                <symbol id="wave">
                  <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"></path>
                  <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"></path>
                  <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2-26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"></path>
                  <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2,26.5-5.2,27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"></path>
                </symbol>
              </svg>

              <div id="door">
                <div id="inner-door">
                  <div id="drum"></div>
                  <div id="page" className="page">
                    <div className="percent">
                      <div className="temperature"></div>
                    </div>
                    <div id="water" className="water">
                      <svg viewBox="0 0 560 20" className="water-wave water-wave-back">
                        <use xlinkHref="#wave"></use>
                      </svg>
                      <svg viewBox="0 0 560 20" className="water-wave water-wave-front">
                        <use xlinkHref="#wave"></use>
                      </svg>
                      <div className="water-inner">
                        <div className="bubble bubble1"></div>
                        <div className="bubble bubble2"></div>
                        <div className="bubble bubble3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
