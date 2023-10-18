import { NextPage } from "next"

interface Props {
  params: {
    id: number
    photoId: number
  }
}

const UserPhotos: NextPage<Props> = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      <h1>UserPhotos</h1>
      Accessing {id}&apos;s photo {photoId}
    </div>
  )
}

export default UserPhotos
