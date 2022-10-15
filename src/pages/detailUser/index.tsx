import { useState, ChangeEvent, FormEvent, useContext, useEffect } from 'react'
import styles from '../detailUser/styles.module.scss'
import Head from 'next/head'
import { HeaderPainel } from '../../components/HeaderPainel/index'
import { AuthContext } from '../../contexts/AuthContext'
import { Input } from '../../components/ui/Input'
import { Button } from '../../components/ui/Button'
import Router from 'next/router'
import { canSSRAuth } from '../../utils/canSSRAuth'
import { FiUpload } from 'react-icons/fi'
import { BsFillArrowLeftSquareFill } from 'react-icons/bs'
import { setupAPIClient } from '../../services/api'
import { toast } from 'react-toastify'
import { FooterPainel } from '../../components/FooterPainel/index'
import Link from '../../../node_modules/next/link'
import { api } from '../../services/apiClient'
import Image from '../../../node_modules/next/image'



export default function DetailUser() {

  const { user } = useContext(AuthContext);

  const [userId, setUserId] = useState('')
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [photo, setPhoto] = useState(null);

  const [loading, setLoading] = useState(false);

  const [currentAdmin, setCurrentAdmin] = useState('');
  const roleADMIN = "ADMIN";


  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/me');
      setCurrentAdmin(response.data.role);
      setUserId(response.data.id)

    }
    loadUsers();
  }, [])


  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) {
      return
    }

    const image = e.target.files[0]
    if (!image) {
      return
    }

    if (image.type === 'image/jpeg' || image.type === 'image/png') {
      setPhoto(image)
      setAvatarUrl(URL.createObjectURL(image))
    }

  }

  async function handleRegisterPhoto(event: FormEvent) {
    event.preventDefault();

    try {
      const data = new FormData()

      if (photo === null) {
        toast.error('Carregue uma imagem!')
        console.log("'Carregue uma imagem!");
        return;
      }

      setLoading(true);

      data.append('user_id', user.id)
      data.append('file', photo)

      const apiClient = setupAPIClient()

      await apiClient.put('/users/photo', data)

      toast.success('Foto do usúario atualizada com sucesso')

    } catch (err) {
      toast.error('Ops erro ao atualizar a foto!')
    }

    setLoading(false);

    Router.reload();

  }


  async function handleRegister(event: FormEvent) {
    event.preventDefault();

    try {
      const data = new FormData()

      if (name === '' || email === '') {
        toast.error('Preencha todos os campos novamente!');
        console.log("Preencha todos os campos novamente!");
        return;
      }

      setLoading(true);

      const apiClient = setupAPIClient()

      await apiClient.put(`/users/update?user_id=${userId}`, { name, email })

      toast.success('Usuario atualizado com sucesso')

    } catch (err) {
      toast.error('Ops erro ao atualizar (verifique todos os campos.)')
    }

    setLoading(false);

    Router.push('/detailUser')

  }



  return (
    <>
      <Head>
        <title>{user?.name} - Detalhes do Usuario</title>
      </Head>

      <HeaderPainel />

      <main className={styles.containerCenter}>
        <section className={styles.login}>
          <div className={styles.returnBox}>
            <Link href={'/dashboard'}>
              <BsFillArrowLeftSquareFill className={styles.return} size={30} />
            </Link>
          </div>

          <h1>Alterar seus dados</h1>

          {currentAdmin === roleADMIN && (
            <p>Você é um usúario <b>administrador!</b></p>
          )}

<<<<<<< HEAD
          <Image className={styles.userImg} src={"http://localhost:3333/files/" + user?.photo} width={540} height={458} alt="foto usuario" />

          <form className={styles.form} onSubmit={handleRegisterPhoto}>

=======
          <Image className={styles.userImg} src={"http://localhost:3333/files/" + user?.photo} width={600} height={418} alt="foto usuario" />
          <form className={styles.form} onSubmit={handleRegister}>
>>>>>>> 1c6f8e0643239c0864ac04ae7013a61ad3314ac9
            <label className={styles.labelAvatar}>

              <span>
                <FiUpload size={20} color="#ff6700" />
              </span>
              <input type="file" accept="image/png, image/jpeg" onChange={handleFile} alt="foto usuario" />
              {avatarUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className={styles.userImgPreview}
                  src={avatarUrl}
                  alt="Foto do usuario"
                  width={150}
                  height={150}
                />
              )}
            </label>
            
            <p>Carregue uma nova foto sua</p>

<<<<<<< HEAD
            <div className={styles.buttonPhoto}>
              <Button
                type="submit"
                loading={loading}
              >
                Salvar nova foto
              </Button>
            </div>

          </form>

          <form className={styles.form} onSubmit={handleRegister}>
=======
            <p>(é obrigatorio carregar a imagem novamente para atualizar qualquer dado)</p>
>>>>>>> 1c6f8e0643239c0864ac04ae7013a61ad3314ac9

            <strong>clique no nome para escrever um novo nome*</strong>

            <Input
              className={styles.inputUser}
              placeholder={`${user?.name}`}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <strong>clique no e-mail para escrever um novo e-mail*</strong>

            <Input
              className={styles.inputUser}
              placeholder={`${user?.email}`}
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Button
              type="submit"
              loading={loading}
            >
              Atualizar
            </Button>
          </form>

        </section>
      </main>

      <FooterPainel />
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);

  return {
    props: {}
  }
})