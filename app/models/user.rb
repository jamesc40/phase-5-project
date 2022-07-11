class User < ApplicationRecord
  has_secure_password
  belongs_to :couple

  validates :email, format: /\w+@\w+\.{1}[a-zA-Z]{2,}/, presence: true, uniqueness: true

  def get_other_user
    couple.users.find_by('email != ?', self.email)
  end

end
