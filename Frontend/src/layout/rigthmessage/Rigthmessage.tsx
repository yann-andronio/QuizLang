import { Fragment, useState } from "react";
import { FaUserCircle, FaPaperPlane, FaSearch } from "react-icons/fa";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

interface Message {
  id: number;
  content: string;
  sender: string;
  isUser: boolean;
}

interface User {
  id: number;
  name: string;
  messagePreview: string;
}

const RightMessage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Welcome to the language learning chat!",
      sender: "user",
      isUser: true,
    },
    {
      id: 2,
      content: "Hi! How are you doing?",
      sender: "other",
      isUser: false,
    },
  ]);

  const [searchUsers, setSearchUsers] = useState<string>("");
  const [users] = useState<User[]>([
    { id: 1, name: "John Doe", messagePreview: "Hey, how are you?" },
    { id: 2, name: "Jane Smith", messagePreview: "Let's learn together!" },
  ]);

  const [selectedUser, setSelectedUser] = useState<User | null>(users[0]);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchUsers.toLowerCase())
  );

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
  };

  const validationSchema = Yup.object({
    newMessage: Yup.string()
      .min(1, "Message too short!")
      .max(255, "Message too long!")
      .required("Message is required"),
  });

  return (
    <Fragment>
      <div className="mx-aut my-3 shadow-lg rounded-xl h-full max-w-screen-2xl">
        <div className="flex h-full bg-white rounded-xl">
          {/* Liste des utilisateurs et recherche */}
          <div className="flex flex-col w-2/5  p-4 overflow-y-auto h-full">
            <div className="flex items-center border-b-2 py-3 px-4 mb-4 rounded-xl bg-blue-50">
              <FaSearch size={20} className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search users..."
                className="py-2 px-3 w-full rounded-xl border-2 border-blue-300 focus:outline-none"
                value={searchUsers}
                onChange={(e) => setSearchUsers(e.target.value)}
              />
            </div>

            {filteredUsers.map((user) => (
              <div
                key={user.id}
                className="flex items-center py-3 px-4 mb-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-blue-200 transition"
                onClick={() => handleUserClick(user)}
              >
                <FaUserCircle size={48} className="text-blue-500 mr-3" />
                <div className="flex flex-col">
                  <span className="text-lg font-semibold">{user.name}</span>
                  <span className="text-gray-500 text-sm">
                    {user.messagePreview}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Messages */}
          <div className="flex flex-col w-full bg-white p-4 rounded-xl">
            <div className="flex items-center justify-between p-4 bg-blue-100 rounded-t-xl">
              <div className="flex items-center">
                <FaUserCircle size={40} className="text-blue-500 mr-3" />
                <div>
                  <span className="text-lg font-semibold">
                    {selectedUser ? selectedUser.name : "Select a user"}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col px-4 py-5 overflow-y-auto h-[70vh]">
              {messages.map((message: Message) => (
                <div
                  key={message.id}
                  className={`flex mb-4 ${
                    message.isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.isUser ? (
                    <>
                      <div className="bg-green-500 text-white px-4 py-3 rounded-lg max-w-xs">
                        {message.content}
                      </div>
                      <FaUserCircle size={32} className="text-gray-400 ml-2" />
                    </>
                  ) : (
                    <>
                      <FaUserCircle size={32} className="text-gray-400 mr-2" />
                      <div className="bg-gray-300 text-black px-4 py-3 rounded-lg max-w-xs">
                        {message.content}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Formulaire de message */}
            <Formik
              initialValues={{ newMessage: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                if (values.newMessage.trim()) {
                  setMessages([
                    ...messages,
                    {
                      id: messages.length + 1,
                      content: values.newMessage,
                      sender: "user",
                      isUser: true,
                    },
                  ]);
                  resetForm();
                }
              }}
            >
              {({ setFieldValue, values }) => (
                <Form className="py-5 px-4 flex items-center">
                  <Field
                    name="newMessage"
                    className="w-full bg-gray-200 py-3 px-4 rounded-lg"
                    type="text"
                    placeholder="Type your message..."
                    value={values.newMessage}
                    onChange={(e: any) =>
                      setFieldValue("newMessage", e.target.value)
                    }
                  />
                  <button
                    type="submit"
                    className="ml-3 p-2 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition"
                  >
                    <FaPaperPlane size={20} />
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RightMessage;
