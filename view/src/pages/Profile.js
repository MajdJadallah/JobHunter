import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
import Modal from "react-modal";

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: 9999,
     // Higher zIndex to make sure it appears above other elements
  },
  content: {
    width: "60%",
    height: "70%",
    margin: 'auto',
    border: "20px solid #F5F5F5",
    borderRadius: "4px",
    padding: "30px",
    background: "#fff",
  },
};

const saveBtn = {
  appearance: "none",
  background: "#000",
  border: "1px solid rgba(27, 31, 35, .15)",
  borderRadius: "6px",
  boxshadow: "rgba(27, 31, 35, .1) 0 1px 0",
  boxsizing: "border-box",
  color:" #fff",
  cursor: "pointer",
  display: "inline-block",
  padding: "6px 16px",
  textalign: "center",
  marginTop:"2rem"
}

const closeBtn = {
  appearance: "none",
  background: "rgb(250 0 0)",
  border: "1px solid rgba(27, 31, 35, .15)",
  borderRadius: "6px",
  boxshadow: "rgba(27, 31, 35, .1) 0 1px 0",
  boxsizing: "border-box",
  color:" #fff",
  cursor: "pointer",
  display: "inline-block",
  padding: "6px 16px",
  textalign: "center",
  marginTop:"2rem"
}

export default function EditButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditProfile = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    yearOfGraduation: "",
    username: "",
    university: "",
    specialty: "",
    summary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the form submission and update the user's profile data
    console.log("Form data:", formData);
    handleCloseModal();
  };
  return (
    <div>
      <Header />
      <div className="gradient-custom-2" style={{ backgroundColor: "" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="9" xl="12">
              <MDBCard>
                <div
                  className="rounded-top text-white d-flex flex-row"
                  style={{ backgroundColor: "#000", height: "200px" }}
                >
                  <div
                    className="ms-4 mt-5 d-flex flex-column"
                    style={{ width: "150px" }}
                  >
                    <MDBCardImage
                      src="https://placehold.co/200x200"
                      alt="Generic placeholder image"
                      className="mt-4 mb-2 img-thumbnail"
                      fluid
                      style={{ width: "150px", zIndex: "1" }}
                    />
                    <MDBBtn
                      outline
                      color="light"
                      onClick={handleEditProfile}
                      style={{
                        height: "36px",
                        color: "white",
                        backgroundColor: "black",
                        zIndex: "5",
                      }}
                    >
                      Edit profile
                    </MDBBtn>
                  </div>
                  <div className="ms-3" style={{ marginTop: "130px" }}>
                    <MDBTypography tag="h5">Obada Ajouly</MDBTypography>
                    <MDBCardText>@obadaajouly</MDBCardText>
                  </div>
                </div>
                <div
                  className="p-4 text-black"
                  style={{ backgroundColor: "#F5F5F5" }}
                >
                  <div className="d-flex justify-content-end text-center py-1">
                    <div>
                      <MDBCardText className="mb-1 h5">3</MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Applications
                      </MDBCardText>
                    </div>
                    <div className="px-3">
                      <MDBCardText className="mb-1 h5">80</MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Followers
                      </MDBCardText>
                    </div>
                    <div>
                      <MDBCardText className="mb-1 h5">75</MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Following
                      </MDBCardText>
                    </div>
                  </div>
                </div>
                <MDBCardBody className="text-black p-4">
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1">About</p>
                    <div className="p-4" style={{ backgroundColor: "#F5F5F5" }}>
                      <MDBCardText className="font-italic mb-1">
                        Name: Obada Ajouly
                      </MDBCardText>
                      <MDBCardText className="font-italic mb-1">
                        Email: obadaajouly@gmail.com
                      </MDBCardText>
                      <MDBCardText className="font-italic mb-1">
                        Year of graduation: 2021
                      </MDBCardText>
                      <MDBCardText className="font-italic mb-1">
                        Univarsity: Hashemite Univarsity
                      </MDBCardText>
                      <MDBCardText className="font-italic mb-1">
                        Speciality: Computer Science
                      </MDBCardText>
                    </div>
                  </div>
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1">Summary</p>
                    <div className="p-4" style={{ backgroundColor: "#F5F5F5" }}>
                      <MDBCardText className="font-italic mb-1">
                        I have some background in data analysis, with a degree
                        from University Amman Arab. What really got me into the
                        field, though, is the internship I did at Company .
                        Throughout my career, I’ve noticed that I’ve always been
                        good with numbers and handling data. For example, when I
                        was working at Company , I led a project for migrating
                        all operations data to a new data warehousing system to
                        cut down on costs. The new solution was a much better
                        fit for our business, which eventually led to savings of
                        up to $200,000 annually.
                      </MDBCardText>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <MDBCardText className="lead fw-normal mb-0">
                      Job Applications
                    </MDBCardText>
                    <MDBCardText className="mb-0">
                      <a href="#!" className="text-muted">
                        Show all
                      </a>
                    </MDBCardText>
                  </div>
                  <MDBRow>
                    <MDBCol className="mb-2">
                      <MDBCardImage
                        src="https://placehold.co/200x200"
                        alt="image 1"
                        className="w-25 rounded-3"
                      />
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        style={modalStyles}
      >
        <h2 
        style={{textAlign:"center",paddingBottom:"1.9rem"}}>Edit Profile</h2>
        <form
          onSubmit={handleSubmit}
          style={{width:"60%", display: "grid", gridTemplateColumns: "40% 60%", gap: "5px",height: "auto", margin: "auto"}}
        >
          <label className="labelEdit">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label className="labelEdit">
            Email:
          </label>
          <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          <label className="labelEdit">
            Year of Graduation:
          </label>
          <input
              type="text"
              name="yearOfGraduation"
              value={formData.yearOfGraduation}
              onChange={handleChange}
            />
          <label className="labelEdit">
            Username:
          </label>
          <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          <label className="labelEdit">
            University:
          </label>
          <input
              type="text"
              name="university"
              value={formData.university}
              onChange={handleChange}
            />
          <label className="labelEdit">
            Speciality:
          </label>
          <input
              type="text"
              name="specialty"
              value={formData.specialty}
              onChange={handleChange}
            />
          <label className="labelEdit">
            Summary:
          </label>
          <textarea
              name="summary"
              value={formData.summary}
              onChange={handleChange}
            />
          <button type="button" onClick={handleCloseModal} style={closeBtn}>Close</button>
          <button type="submit" style={saveBtn}>Save Changes</button>
        </form>
      </Modal>
      <Footer />
    </div>
  );
}
