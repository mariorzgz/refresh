class Outfit < ApplicationRecord
  belongs_to :user

  has_many :item_outfits, dependent: :destroy
  has_many :items, through: :item_outfits
  has_one_attached :photo

  validates :photo, presence: true
end
