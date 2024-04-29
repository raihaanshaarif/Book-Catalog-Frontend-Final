import { useForm } from "react-hook-form";
import { FormEvent, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetCommentsQuery,
  usePostCommentsMutation,
} from "../Redux/book/bookApi";
type FormInputs = {
  comment: string;
};

const CommentCard = () => {
  const { id } = useParams();
  const { data } = useGetCommentsQuery(id);
  const [inputValue, setInputValue] = useState<string>();
  const [postComment] = usePostCommentsMutation();

  const { register, getValues } = useForm<FormInputs>();

  const handleSubmit = () => {
    //  console.log("from Card",inputValue);

    const options = {
      id: id,
      data: { comments: inputValue },
    };
    console.log(options);

    postComment(options);
    setInputValue("");
  };

  return (
    <div>
      <div className="flex justify-center mt-20">
        <form onSubmit={handleSubmit}>
          <input
            className="border px-10 py-2 w-[600px]"
            {...register("comment")}
          />
          <button
            type="submit"
            onClick={() => {
              const value = getValues("comment");
              setInputValue(value);
            }}
          >
            Get Values
          </button>
        </form>
      </div>
      <div>
        <div>
          {data?.data?.comments?.map((comment: string, index: number) => (
            <div key={index}>
              <p>{comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
