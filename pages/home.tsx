function Home() {
  return (
    <section>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <br />
        <br />
        <header>In Home</header>
        <h2 style={{ fontFamily: 'Work Sans' }}>Roboto</h2>
        <h3>Arial</h3>
        <p style={{ fontFamily: 'Noto Sans', fontSize: '20px', width: '50%' }}>
          "A Jordana foi o melhor acontecimento de 2017 e continua sendo! Uma pessoa querida,
          dedicada e cheia de paciência que pelas qualidades pessoais e profissionais me ajudou a
          resgatar o piano. Suas aulas são alegres e criativas nas quais além da técnica a pessoa
          entra na{' '}
          <a id="link-um" href="info.php">
            {' '}
            música{' '}
          </a>
          e no que o compositor quis expressar através daquelas notas, daquele compasso e daquele
          ritmo! Recomendo essa guria, cheia de orgulho!!!!!"
        </p>
      </div>
    </section>
  )
}

export default Home
